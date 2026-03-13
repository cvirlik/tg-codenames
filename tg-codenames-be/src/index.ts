import { Hono } from 'hono'
import { upgradeWebSocket, websocket } from 'hono/bun'

const app = new Hono();

app.get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onOpen: () => {
        
      },
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`)
        ws.send('Hello from server!')
      },
      onClose: () => {
        console.log('Connection closed')
      },
    }
  })
)

Bun.serve({
  fetch: app.fetch,
  port: 3000,
  websocket,
});
