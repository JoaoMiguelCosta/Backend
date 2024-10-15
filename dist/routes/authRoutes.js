"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: O nome do usuário
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Campos obrigatórios faltando ou email já registrado
 *       500:
 *         description: Erro ao registrar usuário
 */
router.post('/register', authController_1.register);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Faz login de um usuário existente
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Um token JWT e informações do usuário
 *       400:
 *         description: Campos obrigatórios faltando
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro ao fazer login
 */
router.post('/login', authController_1.login);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map