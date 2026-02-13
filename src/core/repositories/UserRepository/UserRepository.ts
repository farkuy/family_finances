import type { User } from "../../entities/User/User.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "./dto/index.js";

export interface UserRepository {
    create: (dto: CreateUserDto) => Promise<User>,
    update: (dto: UpdateUserDto) => Promise<User>
    delete: (id: UserIdDto) => Promise<void>,
}