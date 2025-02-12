import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { origin: '*' })

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Fastify API',
            version: '0.1.0'
        }
    }
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.listen({ port: 3333 }).then(() => {
    console.log('Server is running on port 3333')
})