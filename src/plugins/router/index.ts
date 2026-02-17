import type { FastifyInstance } from "fastify";
import { httpUserControllersRegister } from "./handlers/User/user.js";

async function userRoutes(fastify: FastifyInstance) {
    httpUserControllersRegister(fastify)
}


export async function startRoute(fastify: FastifyInstance) {
    await fastify.register(userRoutes, { prefix: '/api' })
}