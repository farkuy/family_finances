import type { FastifyInstance } from "fastify";
import { PgUserRepository, } from "../../infrastructure/bd/User/PgUserRepository.js";
import { UserService } from "../../core/services/UserService/UserService.js";
import { HttpUserControler } from "../../infrastructure/controllers/User/HttpUserControler.js";

export async function userRoutes(fastify: FastifyInstance) {
    const userPg = new PgUserRepository(fastify.pg);
    const userService = new UserService(userPg);
    const controller = new HttpUserControler(userService);

    fastify.post('/user', controller.create);
}