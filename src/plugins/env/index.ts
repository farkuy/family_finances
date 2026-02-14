import type { FastifyInstance } from "fastify";
import fastifyEnv from '@fastify/env';

export const loadEnv = async (fastify: FastifyInstance) => {
    fastify.register(fastifyEnv, {
        schema: {
            type: 'object',
            required: ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'],
            properties: {
                DB_HOST: { type: 'string' },
                DB_PORT: { type: 'string' },
                DB_USER: { type: 'string' },
                DB_PASSWORD: { type: 'string' },
                DB_NAME: { type: 'string' },
            }
        },
        dotenv: true,
        data: process.env
    }).ready((err) => {
        if (err) fastify.log.error(err)
        fastify.log.info(fastify.getEnvs())
    })
    await fastify.after()
}