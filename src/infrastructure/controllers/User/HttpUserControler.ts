import type { FastifyReply, FastifyRequest } from "fastify";
import type { UserService } from "../../../core/services/UserService/UserService.js";

export class HttpUserControler {
    constructor(private userService: UserService) { }

    async create(request: FastifyRequest, reply: FastifyReply) {
        console.log(request)
        const res = await this.userService.create({
            "email": '@23232',
            name: "3d2e2"
        })

        return res
    }
}