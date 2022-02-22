import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();

const createUsersController = new CreateUserController();

router.post("/users", createUsersController.handle);

export { router };
