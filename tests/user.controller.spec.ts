import "reflect-metadata"
import { container } from 'tsyringe';
import { UserController } from '../src/controllers/user.controller';
import { UserService } from '../src/services/user.service';

describe('UserController', () => {
  beforeEach(() => container.clearInstances());

  it('returns users via controller', () => {
    const mock = {
        getAllUsers: jest.fn().mockReturnValue([{ id: 2, name: 'Bob'}])
    } as Partial<UserService>;

    container.registerInstance(UserService, mock as UserService);
    const controller = container.resolve(UserController);
    const res = { json: jest.fn(), status: jest.fn(() => res) } as any;

    controller.getUsers({} as any, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 2, name: 'Bob' }]);
  });
});