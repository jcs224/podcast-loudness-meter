import { Hono } from 'https://deno.land/x/hono@v3.4.3/mod.ts'

const app = new Hono()

app.get('/needles-worker.js', async (c) => {
  const content = await Deno.readTextFile('./needles-worker.js')
  c.header('Content-Type', 'application/javascript')
  return c.body(content)
})

app.get('/', async (c) => {
  const content = await Deno.readTextFile('./index.html')

  return c.html(content)
})

Deno.serve(app.fetch)