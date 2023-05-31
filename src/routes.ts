import { Router } from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';

const router = Router();

router.post('/register', new CreateUserController().handle);

export { router };