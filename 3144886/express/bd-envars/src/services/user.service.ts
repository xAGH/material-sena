import { User } from "../models/user";

class UserService {
    private users: User[] = [];
    private counter = 1;

    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | undefined {
        return this.users.find((user) => user.id === id);
    }

    create(data: Omit<User, "id">): User {
        const newUser: User = {
            id: this.counter++,
            ...data,
        };

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, data: Partial<Omit<User, "id">>): User | undefined {
        const user = this.getById(id);
        if (!user) return undefined;

        Object.assign(user, data);
        return user;
    }

    delete(id: number): boolean {
        const prevLength = this.users.length;
        this.users = this.users.filter((user) => user.id !== id);
        return this.users.length < prevLength;
    }
}

export const userService = new UserService();
