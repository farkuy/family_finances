import type { FastifyInstance } from "fastify";
import type { UserRepository } from "../../../core/repositories/UserRepository/UserRepository.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "../../../core/repositories/UserRepository/dto/index.js";

export class PgUserRepository implements UserRepository {
    constructor(private fastify: FastifyInstance) { }

    async create(dto: CreateUserDto) {
        const res = await this.fastify.pg.query(`INSERT INTO users (email, name) VALUES (${dto.email}, ${dto.name})`)
        return res
    }

    async update(id: UserIdDto, dto: UpdateUserDto) {
        const res = await this.fastify.pg.query(`UPDATE users SET email = ${dto.email}, name = ${dto.name} WHERE id = ${id}`)
        return res
    }

    async delete(id: UserIdDto) {
        const res = await this.fastify.pg.query(`DELETE FROM users WHERE id = ${id}`)
        return res
    }
} 
