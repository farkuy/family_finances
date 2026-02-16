import type { User } from "../../entities/index.js";
import type { CreateUserDto, UpdateUserDto, UserIdDto } from "../../repositories/UserRepository/dto/index.ts";
import type { UserRepository } from "../../repositories/UserRepository/UserRepository.ts";

export class UserService {
    constructor(readonly userRepository: UserRepository) { }

    create = async (user: CreateUserDto): Promise<User> => {
        console.log('in service');
        return await this.userRepository.create(user);
    };

    update = async (id: UserIdDto, user: UpdateUserDto): Promise<User> => {
        // Добавить логику валидации и проверки данных
        return await this.userRepository.update(id, user);
    };

    delete = async (id: UserIdDto): Promise<void> => {
        await this.userRepository.delete(id);
    };
}
