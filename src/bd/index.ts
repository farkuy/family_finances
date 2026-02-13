import type { FastifyInstance } from "fastify";
import postgres from '@fastify/postgres'

const path = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

export async function initBD(fastify: FastifyInstance) {
    fastify.register(postgres, {
        connectionString: path
    })
}