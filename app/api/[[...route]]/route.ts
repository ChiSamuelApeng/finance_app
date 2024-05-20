import { z } from 'zod';
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from '@hono/zod-validator';
import accounts from './accounts';

import { clerkMiddleware, getAuth } from '@hono/clerk-auth';

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.
    get(
        '/hello',
        clerkMiddleware(), 
        (c) => {
    const auth = getAuth(c);

    if(!auth?.userId) {
        return c.json({ error: "Unauthorized" })
    }

    return c.json({
        message: 'Hello Finance!',
        userId: auth.userId,
    })
})

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;