module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://soundcode44.thriveenglish.co');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ valid: false, error: 'Method not allowed' });

  const { licenseKey, instanceId, action } = req.body || {};

  if (!licenseKey || typeof licenseKey !== 'string') {
    return res.status(400).json({ valid: false, error: 'Licence key is required' });
  }

  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  if (!apiKey) {
    console.error('LEMONSQUEEZY_API_KEY env var is not set');
    return res.status(500).json({ valid: false, error: 'Server configuration error' });
  }

  const trimmedKey = licenseKey.trim();

  try {
    let url, body;

    if (action === 'activate') {
      url = 'https://api.lemonsqueezy.com/v1/licenses/activate';
      body = { license_key: trimmedKey, instance_name: 'SoundCode44-PWA' };
    } else {
      if (!instanceId) return res.status(400).json({ valid: false, error: 'Instance ID required for validation' });
      url = 'https://api.lemonsqueezy.com/v1/licenses/validate';
      body = { license_key: trimmedKey, instance_id: instanceId };
    }

    const lsRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await lsRes.json();

    if (action === 'activate') {
      if (data.activated) {
        return res.status(200).json({ valid: true, instanceId: data.instance?.id });
      }
      // Map Lemon Squeezy error strings to user-friendly messages
      let errorMsg = 'Invalid licence key — please try again.';
      if (data.error) {
        if (/disabled/i.test(data.error))    errorMsg = 'This licence key has been cancelled or disabled.';
        else if (/does not exist/i.test(data.error)) errorMsg = 'Licence key not found — please check and try again.';
        else if (/exceeded/i.test(data.error))       errorMsg = 'This licence key has reached its activation limit.';
        else if (/expired/i.test(data.error))        errorMsg = 'This licence key has expired.';
      }
      return res.status(200).json({ valid: false, error: errorMsg });
    } else {
      if (data.valid) return res.status(200).json({ valid: true });
      return res.status(200).json({
        valid: false,
        error: 'Your licence is no longer active — subscription may have been cancelled.',
      });
    }
  } catch (err) {
    console.error('Lemon Squeezy API error:', err);
    return res.status(500).json({ valid: false, error: 'Validation service temporarily unavailable — please try again.' });
  }
};
