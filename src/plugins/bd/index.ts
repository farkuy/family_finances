import type { FastifyInstance } from "fastify";
import postgres from '@fastify/postgres'




export const initBD = async (fastify: FastifyInstance) => {
    fastify.log.info('Start inited data base')

    const envs = fastify.getEnvs<{
        DB_USER: string;
        DB_PASSWORD: string;
        DB_HOST: string;
        DB_PORT: string;
        DB_NAME: string;
    }>();
    const path = `postgres://${envs.DB_USER}:${envs.DB_PASSWORD}@${envs.DB_HOST}:${envs.DB_PORT}/${envs.DB_NAME}`

    try {
        await fastify.register(postgres, {
            connectionString: path
        })
        fastify.log.info('server connected to bd')


        await fastify.pg.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`
        );


        await fastify.after()
        fastify.log.info('Database initialization successful')
    } catch (error) {
        fastify.log.error(`Database initialization failed: ${error}`);
        process.exit(1)
    }
}