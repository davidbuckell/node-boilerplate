import express from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';

const router = express.Router();
const controller = container.resolve(UserController);

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);

export default router;