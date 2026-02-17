import type { FastifyInstance } from "fastify";
import type { User } from "../../../../core/entities/index.js";
import type { UserRepository } from "../../../../core/repositories/UserRepository/UserRepository.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "../../../../core/repositories/UserRepository/dto/index.js";


export class PgUserRepository implements UserRepository {
    constructor(private pg: FastifyInstance['pg']) { }

    async create(dto: CreateUserDto): Promise<User | undefined> {
        try {
            const res = await this.pg.query<User>(
                'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *',
                [dto.email, dto.name]
            )
            return res.rows[0]
        } catch (e) {

        }
    }

    async update(id: UserIdDto, dto: UpdateUserDto) {
        const res = await this.pg.query(
            'UPDATE users SET email = $1, name = $2 WHERE id = $3 RETURNING *',
            [dto.email, dto.name, id]
        );
        return res.rows[0];
    }

    async delete(id: UserIdDto) {
        const res = await this.pg.query(
            'DELETE FROM users WHERE id = $1',
            [id]
        );
    }
}


