import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const PORT = process.env.PORT || 3000

app.get('/health', (req, res) => {
    console.info('INFO: Health check anrop')
    res.json({ status: 'ok' })
})

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(PORT, '0.0.0.0', () => {
    console.info(`INFO: Server sterted on port ${PORT}`)
})
