const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export class User {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly email: string,
    ) { }

    static validate(email: string, name: string) {
        if (!name || name.trim().length === 0) {
            throw new Error("Name cannot be empty");
        }

        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format");
        }

        return new User(0, name.trim(), email);
    }

    getId(): number { return this.id; }

    getName(): string { return this.name; }

    getEmail(): string { return this.email; }

}