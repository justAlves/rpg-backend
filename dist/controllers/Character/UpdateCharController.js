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
exports.UpdateCharController = void 0;
const UpdateCharService_1 = require("../../services/Character/UpdateCharService");
class UpdateCharController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.query.id;
            const { maxLife, maxSanity, currentLife, currentSanity } = req.body;
            const updateCharService = new UpdateCharService_1.UpdateCharService();
            const character = yield updateCharService.execute({ id, maxLife, maxSanity, currentLife, currentSanity });
            return res.json(character);
        });
    }
}
exports.UpdateCharController = UpdateCharController;
