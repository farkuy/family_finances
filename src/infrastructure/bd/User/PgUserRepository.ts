import type { FastifyInstance } from "fastify";
import type { UserRepository } from "../../../core/repositories/UserRepository/UserRepository.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "../../../core/repositories/UserRepository/dto/index.js";
import type { User } from "../../../core/entities/index.js";

export class PgUserRepository implements UserRepository {
    constructor(private pg: FastifyInstance['pg']) { }

    create = async (dto: CreateUserDto): Promise<User> => {
        const res = await this.pg.query(
            'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *',
            [dto.email, dto.name]
        );
        return res.rows[0];
    };

    update = async (id: UserIdDto, dto: UpdateUserDto): Promise<User> => {
        const res = await this.pg.query(
            'UPDATE users SET email = $1, name = $2 WHERE id = $3 RETURNING *',
            [dto.email, dto.name, id]
        );
        return res.rows[0];
    };

    delete = async (id: UserIdDto): Promise<void> => {
        const res = await this.pg.query(
            'DELETE FROM users WHERE id = $1',
            [id]
        );
    };
}



