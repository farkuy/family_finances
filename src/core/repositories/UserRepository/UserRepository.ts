import type { User } from "../../entities/User/User.js";
import type { CreateUserDto } from "./dto/CreateUserDto.js";
import type { UpdateUserDto } from "./dto/UpdateUserDto.js";

export interface UserRepository {
    create: (dto: CreateUserDto) => User,
    update: (dto: UpdateUserDto) => User
    delete: (id: string) => void,
}