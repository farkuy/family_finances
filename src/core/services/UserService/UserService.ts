import type { User } from "../../entities/User/User.ts";
import type { UserIdDto } from "../../repositories/UserRepository/dto/index.ts";
import type { UserRepository } from "../../repositories/UserRepository/UserRepository.ts";

export class UserService {
    constructor(
        readonly userRepository: UserRepository
    ) { }

    async create(): Promise<User> {
        //Добавить логику валидации и проверки данных
        return await this.userRepository.create({
            email: 'random@mail.ru',
            name: 'randomName'
        })
    }

    async delete(id: UserIdDto) {
        await this.userRepository.delete(id)
    }
}