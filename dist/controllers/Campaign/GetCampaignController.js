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
exports.GetCampaignController = void 0;
const GetCampaignService_1 = require("../../services/Campaign/GetCampaignService");
class GetCampaignController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCampaignService = new GetCampaignService_1.GetCampaignService();
            const campaign = yield getCampaignService.execute();
            return res.json(campaign);
        });
    }
}
exports.GetCampaignController = GetCampaignController;
