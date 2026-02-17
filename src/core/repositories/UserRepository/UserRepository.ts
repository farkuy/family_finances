import type { User } from "../../entities/index.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "./dto/index.js";

export interface UserRepository {
    create: (dto: CreateUserDto) => Promise<User | undefined>,
    update: (id: UserIdDto, dto: UpdateUserDto) => Promise<User | undefined>
    delete: (id: UserIdDto) => Promise<void>,
}