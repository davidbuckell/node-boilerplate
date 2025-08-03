import { singleton } from 'tsyringe';

export interface IUser {
    id: number;
    name: string;
}

@singleton()
export class UserService {
    getAllUsers(): IUser[] {
        return [{ id: 1, name: 'Alice'}];
    }

    getUserById(id: number): IUser | null {
        return { id, name: `User ${id}`};
    }
}