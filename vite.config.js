import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const TELEGRAM_CHAT_ID = '-1003213920310'

const buildMessage = ({ name, phone }) =>
  [
    "Yangi so'rov",
    '',
    `Ism: ${name}`,
    `Telefon: ${phone}`,
    `Vaqt: ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`,
  ].join('\n')

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'telegram-contact-dev-endpoint',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            const botToken = env.TELEGRAM_BOT_TOKEN

            if (!botToken) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Server is not configured' }))
              return
            }

            let rawBody = ''

            req.on('data', (chunk) => {
              rawBody += chunk
            })

            req.on('end', async () => {
              try {
                const { name, phone } = JSON.parse(rawBody || '{}')

                if (!name || !phone) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Name and phone are required' }))
                  return
                }

                const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: buildMessage({ name, phone }),
                  }),
                })

                if (!telegramResponse.ok) {
                  const errorBody = await telegramResponse.text()
                  res.statusCode = 502
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: errorBody || 'Telegram request failed' }))
                  return
                }

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ ok: true }))
              } catch (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: error.message || 'Unexpected server error' }))
              }
            })
          })
        },
      },
    ],
  }
})
