import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import authors from './authors';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/status', (c) => {
  return c.json({
    message: '[FUNDY]: API IS OK',
  });
});

app.route('/authors', authors);

export const GET = handle(app);
export const POST = handle(app);
