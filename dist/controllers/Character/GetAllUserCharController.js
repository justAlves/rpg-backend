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
exports.GetUserCharController = void 0;
const GetAllUserCharService_1 = require("../../services/Character/GetAllUserCharService");
class GetUserCharController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.user_id;
            const campaign_id = req.query.campaign_id;
            const getUserCharService = new GetAllUserCharService_1.GetUserCharService();
            const character = yield getUserCharService.execute({ user_id, campaign_id });
            return res.json(character);
        });
    }
}
exports.GetUserCharController = GetUserCharController;
