import http from 'http'
import config from '@config'
import app from './app'

const port = parseInt(config.port ?? '8080', 10)

const server = http.createServer(app)

server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`)
})
