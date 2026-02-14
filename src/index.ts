import fastify from 'fastify'
import { loadEnv, initBD } from './plugins/index.js'

const server = fastify({
    logger: true,
})

await loadEnv(server)
await initBD(server)

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    server.log.info(`Server listening at ${address}`)
})