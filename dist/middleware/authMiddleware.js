"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Access denied, token missing!' });
        return;
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid token', error });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map