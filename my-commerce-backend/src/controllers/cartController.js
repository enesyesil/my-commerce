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
exports.getCart = exports.addToCart = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, quantity } = req.body;
    try {
        const existingCartItem = yield prismaClient_1.default.cart.findFirst({
            where: { userId, productId },
        });
        if (existingCartItem) {
            const updatedCartItem = yield prismaClient_1.default.cart.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity },
            });
            return res.json(updatedCartItem);
        }
        const newCartItem = yield prismaClient_1.default.cart.create({
            data: { userId, productId, quantity },
        });
        res.json(newCartItem);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.addToCart = addToCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.query;
    try {
        const cartItems = yield prismaClient_1.default.cart.findMany({
            where: { userId: Number(userId) },
            include: { product: true },
        });
        res.json(cartItems);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getCart = getCart;
