import { defineConfig, type Plugin } from 'vite'

const apiServer: Plugin = {
  name: 'api-server',
  configureServer(server) {
    server.middlewares.use('/data', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        messgae: 'Hello, world!',
      }))
    })
  },
}

export default defineConfig({
  plugins: [
    apiServer,
  ],
  build: {
    target: 'esnext'
  },
})
