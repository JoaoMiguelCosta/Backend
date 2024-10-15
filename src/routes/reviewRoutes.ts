import { Router } from 'express';
import { addReview, getReviews } from '../controllers/reviewController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Operações relacionadas a avaliações de filmes
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Adicionar uma nova avaliação
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movieId:
 *                 type: string
 *                 description: ID do filme que está sendo avaliado
 *                 example: "1234567890abcdef12345678"
 *               userId:
 *                 type: string
 *                 description: ID do usuário que está fazendo a avaliação
 *                 example: "abcdef1234567890abcdef12"
 *               rating:
 *                 type: integer
 *                 description: Nota da avaliação (de 1 a 5)
 *                 example: 4
 *               comment:
 *                 type: string
 *                 description: Comentário do usuário sobre o filme
 *                 example: "Excelente filme, recomendo!"
 *     responses:
 *       201:
 *         description: Avaliação adicionada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Review added successfully"
 *                 review:
 *                   type: object
 *                   properties:
 *                     movieId:
 *                       type: string
 *                     userId:
 *                       type: string
 *                     rating:
 *                       type: integer
 *                     comment:
 *                       type: string
 *       400:
 *         description: Erro ao adicionar a avaliação, dados inválidos
 *       500:
 *         description: Erro ao adicionar a avaliação
 */
router.post('/reviews', addReview);

/**
 * @swagger
 * /reviews/{movieId}:
 *   get:
 *     summary: Obter avaliações de um filme específico
 *     tags: [Reviews]
 *     parameters:
 *       - name: movieId
 *         in: path
 *         required: true
 *         description: ID do filme para o qual se deseja obter as avaliações
 *         schema:
 *           type: string
 *           example: "1234567890abcdef12345678"
 *     responses:
 *       200:
 *         description: Lista de avaliações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   movieId:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   rating:
 *                     type: integer
 *                   comment:
 *                     type: string
 *       404:
 *         description: Filme não encontrado ou sem avaliações
 *       500:
 *         description: Erro ao buscar avaliações
 */
router.get('/reviews/:movieId', getReviews);

export default router;