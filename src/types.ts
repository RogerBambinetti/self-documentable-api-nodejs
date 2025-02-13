import {
  type FastifyBaseLogger,
  type FastifyInstance,
  type RawRequestDefaultExpression,
  type RawReplyDefaultExpression,
  type RawServerDefault,
} from 'fastify';
import { type ZodTypeProvider } from 'fastify-type-provider-zod';

export type FastifyTypedInstance = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyBaseLogger,
  ZodTypeProvider
>;
