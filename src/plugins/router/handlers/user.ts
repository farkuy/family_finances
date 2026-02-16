import type { FastifyInstance } from "fastify";
import { PgUserRepository } from "../../../infrastructure/bd/User/PgUserRepository.js";
import { UserService } from "../../../core/services/UserService/UserService.js";
import { HttpUserControler } from "../../../infrastructure/controllers/User/HttpUserControler.js";

export function httpUserController(fastify: FastifyInstance) {
    const userPg = new PgUserRepository(fastify.pg);
    const userService = new UserService(userPg);

    return new HttpUserControler(userService);
}