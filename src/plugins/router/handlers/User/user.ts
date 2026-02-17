import type { FastifyInstance } from "fastify";
import { PgUserRepository } from "../../../../infrastructure/bd/repositories/User/PgUserRepository.js";
import { UserService } from "../../../../core/services/UserService/UserService.js";
import { HttpUserControler } from "../../../../infrastructure/controllers/User/HttpUserControler.js";

export function httpUserControllersRegister(fastify: FastifyInstance) {
    const userPg = new PgUserRepository(fastify.pg);
    const userService = new UserService(userPg);
    const userController = new HttpUserControler(userService);

    fastify.post('/user', userController.create);
}