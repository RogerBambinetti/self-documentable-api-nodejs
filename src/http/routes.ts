import { z } from 'zod';

import type { FastifyTypedInstance } from "../types";

export async function routes(app: FastifyTypedInstance) {
    app.get('/test', {
        schema: {
            tags: ['test'],
            description: 'Get all users',
            response: z.object({
                hello: z.string()
            })
        }
    }, async (request, reply) => {
        return { hello: 'world' }
    })
}