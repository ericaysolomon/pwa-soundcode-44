module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://soundcode44.thriveenglish.co');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, firstName } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const LIST_ID = 2;

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        listIds: [LIST_ID],
        updateEnabled: true,
        attributes: { SOURCE: 'SoundCode44 PWA', FIRSTNAME: firstName || '' }
      })
    });

    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return res.status(200).json({ success: true });
    } else {
      const data = await brevoRes.json();
      return res.status(200).json({ success: false, error: data.message });
    }
  } catch(err) {
    return res.status(500).json({ error: 'Service unavailable' });
  }
};
