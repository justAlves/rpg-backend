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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../../prisma"));
class CreateUserService {
    execute({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !name || !password) {
                throw new Error('Preencha todos os campos!');
            }
            const emailExist = yield prisma_1.default.user.findFirst({
                where: {
                    email
                }
            });
            if (emailExist) {
                throw new Error('Email já cadastrado no sistema!');
            }
            const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
            const user = yield prisma_1.default.user.create({
                data: {
                    name,
                    email,
                    password: passwordHash
                },
                select: {
                    name: true,
                    email: true,
                    characters: true,
                    created_at: true,
                    updated_at: true,
                }
            });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
