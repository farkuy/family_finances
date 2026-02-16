import fastify, { type FastifyInstance } from 'fastify'
import { loadEnv, initBD } from './plugins/index.js'
import { PgUserRepository } from './infrastructure/bd/User/PgUserRepository.js'
import { UserService } from './core/services/UserService/UserService.js'
import { HttpUserControler } from './infrastructure/controllers/User/HttpUserControler.js'

const server = fastify({
    logger: true,
})

await loadEnv(server)
await initBD(server)

async function userRoutes(fastify: FastifyInstance) {
    const userPg = new PgUserRepository(fastify.pg);
    const userService = new UserService(userPg);
    const controller = new HttpUserControler(userService);

    fastify.post('/user', controller.create.bind(controller));
}

await server.register(userRoutes, { prefix: '/api' });

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    server.log.info(`Server listening at ${address}`)
})