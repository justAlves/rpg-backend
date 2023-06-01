import { Router } from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';
import { AuthUserController } from './controllers/User/AuthUserController';

const router = Router();

router.post('/register', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);

export { router };