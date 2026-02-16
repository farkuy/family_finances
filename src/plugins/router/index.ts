import type { FastifyInstance } from "fastify";
import { httpUserController } from "./handlers/user.js";

export async function userRoutes(fastify: FastifyInstance) {
    const userController = httpUserController(fastify)
    fastify.post('/user', userController.create);
}