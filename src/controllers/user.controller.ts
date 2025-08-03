import { Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';
import { IUser, UserService } from '../services/user.service';

@singleton()
export class UserController {
    constructor(@inject(UserService) private userService: UserService) {}

    getUsers = (req: Request, res: Response) => {
        const users: IUser[] = this.userService.getAllUsers();
        res.json(users);
    };

    getUserById = (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const user = this.userService.getUserById(id);
        user ? res.json(user) : res.status(404).json({error: 'User not found' });
    }
}