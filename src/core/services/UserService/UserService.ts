import type { User } from "../../entities/index.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "../../repositories/UserRepository/dto/index.ts";
import type { UserRepository } from "../../repositories/UserRepository/UserRepository.ts";

export class UserService {
    constructor(
        readonly userRepository: UserRepository
    ) { }

    async create(user: CreateUserDto): Promise<User> {
        console.log('in service')
        return await this.userRepository.create(user)
    }

    async update(id: UserIdDto, user: UpdateUserDto): Promise<User> {
        //Добавить логику валидации и проверки данных
        return await this.userRepository.update(id, user)
    }

    async delete(id: UserIdDto) {
        await this.userRepository.delete(id)
    }
}