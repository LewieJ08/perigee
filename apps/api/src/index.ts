import { Hono } from 'hono'
import healthRoutes from './routes/health'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/health', healthRoutes)

export default app
