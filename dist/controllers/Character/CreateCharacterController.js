"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacterController = void 0;
const CreateCharacterService_1 = require("../../services/Character/CreateCharacterService");
class CreateCharacterController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, strength, fight, intelligence, agility, charm, emotion, campaign_id } = req.body;
            const user_id = req.user_id;
            const createCharacterService = new CreateCharacterService_1.CreateCharacterService();
            const character = yield createCharacterService.execute({ name, strength, fight, intelligence, agility, charm, emotion, user_id, campaign_id });
            return res.json(character);
        });
    }
}
exports.CreateCharacterController = CreateCharacterController;
