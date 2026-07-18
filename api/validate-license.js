module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://soundcode44.thriveenglish.co');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ valid: false, error: 'Method not allowed' });

  const { licenseKey, action } = req.body || {};
  if (!licenseKey || typeof licenseKey !== 'string') {
    return res.status(400).json({ valid: false, error: 'Licence key is required' });
  }

  const trimmedKey = licenseKey.trim().toUpperCase();

  // Master keys — always valid, offline-capable
  const MASTER_KEYS = ['SC44PRO', 'THRIVEDEV2024'];
  if (MASTER_KEYS.includes(trimmedKey)) {
    return res.status(200).json({ valid: true, type: 'master' });
  }

  // Review keys — time-limited, online-only
  // To add a key: add entry, push to Vercel.
  // To revoke early: remove entry, push to Vercel.
  // Expiry value = Date.now() + (48 * 60 * 60 * 1000) for 48 hours
  // Example: 'REVIEW-STAFF01': 1750000000000
  const REVIEW_KEYS = {
    // ADD REVIEW KEYS HERE:
    // 'REVIEW-STAFF01': 1750000000000,
    // 'REVIEW-TEACH01': 1750000000000,
    'REVIEW-STAFF01': 1782432717967,
    'REVIEW-TEACH62': 1785890474993,
  };

  // ── Supabase-issued keys (Selfany pool + review keys) ──────────────────────
  const SB_URL = process.env.SUPABASE_URL;
  const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (SB_URL && SB_KEY) {
    try {
      const q = `${SB_URL}/rest/v1/licenses?key=eq.${encodeURIComponent(trimmedKey)}&select=*`;
      const sbRes = await fetch(q, {
        headers: {
          apikey: SB_KEY,
          Authorization: `Bearer ${SB_KEY}`,
        },
      });
      const rows = await sbRes.json();

      if (Array.isArray(rows) && rows.length === 1) {
        const lic = rows[0];

        if (lic.status === 'revoked') {
          return res.status(200).json({ valid: false, error: 'This licence key is no longer active.' });
        }

        // Already-expired keys
        if (lic.expires_at && new Date(lic.expires_at).getTime() <= Date.now()) {
          return res.status(200).json({ valid: false, error: 'This licence key has expired.' });
        }

        // First use: stamp activation and compute expiry from validity_days
        if (lic.status === 'available') {
          const patch = { status: 'active', activated_at: new Date().toISOString() };
          if (lic.validity_days) {
            patch.expires_at = new Date(Date.now() + lic.validity_days * 86400000).toISOString();
          }
          await fetch(`${SB_URL}/rest/v1/licenses?id=eq.${lic.id}`, {
            method: 'PATCH',
            headers: {
              apikey: SB_KEY,
              Authorization: `Bearer ${SB_KEY}`,
              'Content-Type': 'application/json',
              Prefer: 'return=minimal',
            },
            body: JSON.stringify(patch),
          });
        }

        return res.status(200).json({ valid: true, type: lic.product_type });
      }
    } catch (err) {
      console.error('Supabase lookup error:', err);
      // fall through to legacy paths below
    }
  }

  if (trimmedKey.startsWith('REVIEW-')) {
    const expiry = REVIEW_KEYS[trimmedKey];
    if (!expiry) {
      return res.status(200).json({ valid: false, error: 'Invalid review key.' });
    }
    if (Date.now() > expiry) {
      return res.status(200).json({ valid: false, error: 'This review key has expired.' });
    }
    return res.status(200).json({ valid: true, type: 'review' });
  }

  // Gumroad keys — verified against API
  const PRODUCT_TYPES = {
    'ynxtkb': 'subscription',
    'ilcnt':  'lifetime',
  };

  const incrementUses = action === 'activate';

  try {
    for (const [productId, keyType] of Object.entries(PRODUCT_TYPES)) {
      const gumroadRes = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          product_id: productId,
          license_key: licenseKey.trim(),
          increment_uses_count: incrementUses ? 'true' : 'false',
        }),
      });
      const data = await gumroadRes.json();
      if (data.success) {
        const purchase = data.purchase;
        if (purchase.refunded || purchase.chargebacked || purchase.disputed) {
          return res.status(200).json({ valid: false, error: 'This licence key is no longer active.' });
        }
        // Membership lapse check. Gumroad sets these to the membership END date,
        // not the cancellation request time, and resets them to null on renewal.
        // Only revoke once the end date has actually passed.
        const subEnd = purchase.subscription_cancelled_at
                    || purchase.subscription_failed_at
                    || purchase.subscription_ended_at;
        if (subEnd) {
          const endMs = new Date(subEnd).getTime();
          if (!isNaN(endMs) && endMs <= Date.now()) {
            return res.status(200).json({ valid: false, error: 'This subscription is no longer active. Please renew to continue.' });
          }
        }
        return res.status(200).json({ valid: true, type: keyType });
      }
    }
    return res.status(200).json({ valid: false, error: 'Invalid licence key — please check and try again.' });
  } catch (err) {
    console.error('Gumroad API error:', err);
    return res.status(500).json({ valid: false, error: 'Validation service temporarily unavailable — please try again.' });
  }
};