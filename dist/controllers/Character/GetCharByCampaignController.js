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
exports.GetCharByCampaignController = void 0;
const GetCharByCampaignService_1 = require("../../services/Character/GetCharByCampaignService");
class GetCharByCampaignController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const campaign_id = req.query.campaign_id;
            const getCharByCampaignService = new GetCharByCampaignService_1.GetCharByCampaignService();
            const character = yield getCharByCampaignService.execute({ campaign_id });
            return res.json(character);
        });
    }
}
exports.GetCharByCampaignController = GetCharByCampaignController;
