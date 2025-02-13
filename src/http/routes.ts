import type { FastifyTypedInstance } from "../types";

export async function routes(app: FastifyTypedInstance) {
    app.get('/', {
        schema: {
            tags: ['users'],
            description: 'Get all users',
        }
    }, async (request, reply) => {
        return { hello: 'world' }
    })
}