import type { FastifyReply, FastifyRequest } from "fastify";
import type { UserService } from "../../../core/services/UserService/UserService.js";

type CreateUserRequest = {
    Body: { email: string; name: string }
};

type UpdateUserRequest = CreateUserRequest & {
    Body: { id: string }
};


export class HttpUserControler {
    constructor(private userService: UserService) { }

    create = async (request: FastifyRequest<CreateUserRequest>, reply: FastifyReply) => {
        try {
            const { email, name } = request.body
            const res = await this.userService.create({
                email,
                name,
            })

            return res
        } catch (e) {

        }
    }

    update = async (request: FastifyRequest<UpdateUserRequest>, reply: FastifyReply) => {
        try {
            const { email, name, id } = request.body
            const res = await this.userService.update(id, {
                email,
                name,
            })

            return res
        } catch (e) {

        }
    }
}