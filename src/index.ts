import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import {
  validatorCompiler,
  serializerCompiler,
} from 'fastify-type-provider-zod';
import { routes } from './http/routes';

async function init(): Promise<void> {
  const app = fastify();

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(fastifyCors, { origin: '*' });

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        version: '0.1.0',
      },
    },
  });

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });

  app.register(routes);

  const PORT = 3333;

  app.listen({ port: PORT }).then(() => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Documentation available at http://localhost:${PORT}/docs`);
  });
}

init();
