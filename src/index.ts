import fastify from 'fastify'
import { initBD, loadEnv } from './plugins/index.js'
import { userRoutes } from './plugins/router/index.js'

const server = fastify({
    logger: true,
})

await loadEnv(server)
await initBD(server)
await server.register(userRoutes, { prefix: '/api' });

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    server.log.info(`Server listening at ${address}`)
})