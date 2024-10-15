"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: 'Nome, email e senha são obrigatórios!' });
        return;
    }
    try {
        const existingUser = await userModel_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'Email já registrado!' });
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = new userModel_1.default({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Utilizador registado com sucesso' });
    }
    catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: 'Email e senha são obrigatórios!' });
        return;
    }
    try {
        const user = await userModel_1.default.findOne({ email });
        if (!user) {
            res.status(401).json({ message: 'Credenciais inválidas!' });
            return;
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Credenciais inválidas!' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    }
    catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map