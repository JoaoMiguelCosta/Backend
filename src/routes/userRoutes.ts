import { Router } from 'express';
import { getUsers, updateUser, deleteUser } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obter uma lista de usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # A autenticação por token Bearer é necessária
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do usuário
 *                   name:
 *                     type: string
 *                     description: Nome do usuário
 *                   email:
 *                     type: string
 *                     description: Email do usuário
 *                   role:
 *                     type: string
 *                     description: Papel do usuário (e.g., 'Admin', 'User')
 *       401:
 *         description: Acesso negado, token inválido ou ausente
 *       403:
 *         description: Acesso negado, permissões insuficientes
 *       500:
 *         description: Erro ao buscar usuários
 */
router.get('/', authMiddleware, roleMiddleware('Admin'), getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualizar um usuário existente
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário que deve ser atualizado
 *         schema:
 *           type: string
 *           example: "603d2e471cf0c2369823d9f3"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *                 example: "João da Silva"
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "joao.silva@example.com"
 *               role:
 *                 type: string
 *                 description: Papel do usuário (e.g., 'Admin', 'User')
 *                 example: "User"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: Dados inválidos fornecidos para atualização
 *       401:
 *         description: Acesso negado, token inválido ou ausente
 *       403:
 *         description: Acesso negado, permissões insuficientes
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar o usuário
 */
router.put('/:id', authMiddleware, roleMiddleware('Admin'), updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Excluir um usuário existente
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário que deve ser excluído
 *         schema:
 *           type: string
 *           example: "603d2e471cf0c2369823d9f3"
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuário excluído com sucesso"
 *       401:
 *         description: Acesso negado, token inválido ou ausente
 *       403:
 *         description: Acesso negado, permissões insuficientes
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao excluir o usuário
 */
router.delete('/:id', authMiddleware, roleMiddleware('Admin'), deleteUser);

export default router;