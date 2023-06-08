import { Router } from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';
import { AuthUserController } from './controllers/User/AuthUserController';
import { GetUserController } from './controllers/User/GetUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCampaignController } from './controllers/Campaign/CreateCampaignController';
import { GetCampaignController } from './controllers/Campaign/GetCampaignController';
import { CreateCharacterController } from './controllers/Character/CreateCharacterController';
import { GetUserCharController } from './controllers/Character/GetAllUserCharController';
import { GetCharByCampaignController } from './controllers/Character/GetCharByCampaignController';
import { GetCharByIdController } from './controllers/Character/GetCharByIdController';

const router = Router();

//user routes
router.post('/register', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', isAuthenticated, new GetUserController().handle);

//campaign routes
router.post('/campaign', isAuthenticated, new CreateCampaignController().handle);
router.get('/campaign', isAuthenticated, new GetCampaignController().handle);

//character routes
router.post('/character', isAuthenticated, new CreateCharacterController().handle);
router.get('/character/my', isAuthenticated, new GetUserCharController().handle);
router.get('/character/campaign', isAuthenticated, new GetCharByCampaignController().handle);
router.get('/character', isAuthenticated, new GetCharByIdController().handle);

export { router };