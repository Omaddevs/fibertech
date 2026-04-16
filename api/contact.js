const TELEGRAM_CHAT_ID = '-1003213920310';

const buildMessage = ({ name, phone }) =>
  [
    'Yangi so\'rov',
    '',
    `Ism: ${name}`,
    `Telefon: ${phone}`,
    `Vaqt: ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`
  ].join('\n');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  if (!botToken) {
    return res.status(500).json({ error: 'Server is not configured' });
  }

  const { name, phone } = req.body ?? {};

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: buildMessage({ name, phone })
      })
    });

    if (!telegramResponse.ok) {
      const errorBody = await telegramResponse.text();
      return res.status(502).json({ error: errorBody || 'Telegram request failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Unexpected server error' });
  }
}
