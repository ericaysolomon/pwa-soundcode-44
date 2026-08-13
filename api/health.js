// Lightweight keep-alive + health check.
// Touches Supabase so the free-tier project never hits 7 days of inactivity,
// and reports whether the DB->validation path is actually working.
module.exports = async function handler(req, res) {
  const SB_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SB_URL || !SB_KEY) {
    return res.status(500).json({ ok: false, error: 'Supabase env vars not set' });
  }

  try {
    const r = await fetch(`${SB_URL}/rest/v1/licenses?select=id`, {
      method: 'GET',
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
        Prefer: 'count=exact',
        Range: '0-0',
      },
    });

    if (!r.ok) {
      const body = await r.text();
      return res.status(500).json({ ok: false, status: r.status, error: body.slice(0, 200) });
    }

    const cr = r.headers.get('content-range') || '';
    const count = cr.includes('/') ? cr.split('/')[1] : 'unknown';
    return res.status(200).json({ ok: true, db: 'awake', licenses: count, at: new Date().toISOString() });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err).slice(0, 200) });
  }
};
