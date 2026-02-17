import type { User } from "../../entities/index.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "./dto/index.js";

export interface UserRepository {
    create: (dto: CreateUserDto) => Promise<User | Error>,
    update: (id: UserIdDto, dto: UpdateUserDto) => Promise<User | Error>
    delete: (id: UserIdDto) => Promise<void>,
}