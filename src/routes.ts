import { Router } from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';
import { AuthUserController } from './controllers/User/AuthUserController';
import { GetUserController } from './controllers/User/GetUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCampaignController } from './controllers/Campaign/CreateCampaignController';
import { GetCampaignController } from './controllers/Campaign/GetCampaignController';

const router = Router();

//user routes
router.post('/register', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', isAuthenticated, new GetUserController().handle);

//campaign routes
router.post('/campaign', isAuthenticated, new CreateCampaignController().handle);
router.get('/campaign', isAuthenticated, new GetCampaignController().handle);

export { router };