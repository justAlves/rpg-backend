"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/User/CreateUserController");
const AuthUserController_1 = require("./controllers/User/AuthUserController");
const GetUserController_1 = require("./controllers/User/GetUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCampaignController_1 = require("./controllers/Campaign/CreateCampaignController");
const GetCampaignController_1 = require("./controllers/Campaign/GetCampaignController");
const CreateCharacterController_1 = require("./controllers/Character/CreateCharacterController");
const GetAllUserCharController_1 = require("./controllers/Character/GetAllUserCharController");
const GetCharByCampaignController_1 = require("./controllers/Character/GetCharByCampaignController");
const GetCharByIdController_1 = require("./controllers/Character/GetCharByIdController");
const UpdateCharController_1 = require("./controllers/Character/UpdateCharController");
const router = (0, express_1.Router)();
exports.router = router;
//user routes
router.post('/register', new CreateUserController_1.CreateUserController().handle);
router.post('/auth', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new GetUserController_1.GetUserController().handle);
//campaign routes
router.post('/campaign', isAuthenticated_1.isAuthenticated, new CreateCampaignController_1.CreateCampaignController().handle);
router.get('/campaign', isAuthenticated_1.isAuthenticated, new GetCampaignController_1.GetCampaignController().handle);
//character routes
router.post('/character', isAuthenticated_1.isAuthenticated, new CreateCharacterController_1.CreateCharacterController().handle);
router.get('/character/my', isAuthenticated_1.isAuthenticated, new GetAllUserCharController_1.GetUserCharController().handle);
router.get('/character/campaign', isAuthenticated_1.isAuthenticated, new GetCharByCampaignController_1.GetCharByCampaignController().handle);
router.get('/character', isAuthenticated_1.isAuthenticated, new GetCharByIdController_1.GetCharByIdController().handle);
router.patch('/character', isAuthenticated_1.isAuthenticated, new UpdateCharController_1.UpdateCharController().handle);
