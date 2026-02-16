import type { FastifyReply, FastifyRequest } from "fastify";
import type { UserService } from "../../../core/services/UserService/UserService.js";

export class HttpUserControler {
    constructor(private userService: UserService) { }

    create = async (request: FastifyRequest, reply: FastifyReply) => {
        const { email, name } = request.body
        const res = await this.userService.create({
            email,
            name,
        })

        return res
    }
}