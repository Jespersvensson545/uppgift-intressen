import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const APP_ENV = process.env.APP_ENV || 'development'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const PORT = process.env.PORT || 3000

app.get('/health', (req, res) => {
    console.info('INFO: Health check anrop')
    res.json({ status: 'ok', environment: APP_ENV })
})

app.use(express.static(path.join(__dirname, 'dist')))


app.get('/api/error', (req, res) => {
    throw new Error('Testfel från api')
})

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
    console.error(`ERROR: ${err.message} (${req.method} ${req.url})`)
    res.status(500).json({ error: 'något gick fel på servern' })
})

app.listen(PORT, '0.0.0.0', () => {
    console.info(`INFO: Server started on port ${PORT} (${APP_ENV})`)
})
