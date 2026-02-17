import type { FastifyReply, FastifyRequest } from "fastify";
import type { UserService } from "../../../core/services/UserService/UserService.js";

interface CreateUserRequest {
    Body: { email: string; name: string, id?: string }
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
}