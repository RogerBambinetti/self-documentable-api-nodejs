import { z } from 'zod';

import type { FastifyTypedInstance } from '../types';

export async function routes(app: FastifyTypedInstance): Promise<void> {
  app.get(
    '/test',
    {
      schema: {
        tags: ['test'],
        description: 'Get test',
        response: {
          200: z.object({
            hello: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      return await reply.status(200).send({ hello: 'world' });
    },
  );

  app.post(
    '/test',
    {
      schema: {
        tags: ['test'],
        description: 'Post test',
        body: z.object({
          hello: z.string(),
        }),
        response: {
          200: z.object({
            hello: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      return await reply.send({ hello: 'world' });
    },
  );
}
