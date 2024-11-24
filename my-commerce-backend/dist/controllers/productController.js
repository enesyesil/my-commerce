"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const getAllProducts = async (req, res) => {
    try {
        const products = await prismaClient_1.default.product.findMany();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=productController.js.map