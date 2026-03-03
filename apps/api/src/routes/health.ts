import { Hono } from "hono";

const app = new Hono();

app.get('/', (c) => {
    return c.json({
        status: 'ok',
        timestamp: new Date(),
        uptime: Math.round(Bun.nanoseconds() / 1_000_000_000)
    }, 200)
})

export default app;