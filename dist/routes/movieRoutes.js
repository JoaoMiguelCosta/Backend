"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = require("../controllers/movieController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const roleMiddleware_1 = require("../middleware/roleMiddleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Operações relacionadas a filmes
 */
/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obter uma lista de filmes
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []  # Autenticação com JWT
 *     responses:
 *       200:
 *         description: Lista de filmes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Solicitação malformada, parâmetros inválidos
 *       401:
 *         description: Acesso negado, token inválido ou não fornecido
 *       403:
 *         description: O usuário não tem permissão para acessar esta rota
 *       404:
 *         description: Não foram encontrados filmes
 *       500:
 *         description: Erro interno do servidor ao buscar filmes
 */
router.get('/', authMiddleware_1.authMiddleware, movieController_1.getMovies);
/**
 * @swagger
 * /movies/search:
 *   get:
 *     summary: Pesquisar filmes
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []  # Autenticação com JWT
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *         description: Número da página para paginar resultados
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: limit
 *         in: query
 *         required: false
 *         description: Número máximo de resultados por página
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: sortBy
 *         in: query
 *         required: false
 *         description: Campo pelo qual os resultados serão ordenados
 *         schema:
 *           type: string
 *           example: releaseDate
 *       - name: search
 *         in: query
 *         required: false
 *         description: Texto para buscar no título do filme
 *         schema:
 *           type: string
 *           example: "Aventura"
 *       - name: genre
 *         in: query
 *         required: false
 *         description: Gênero do filme para filtrar resultados
 *         schema:
 *           type: string
 *           example: "Ação"
 *     responses:
 *       200:
 *         description: Resultados da pesquisa de filmes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 movies:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Movie'
 *       401:
 *         description: Acesso negado, token inválido
 *       500:
 *         description: Erro ao buscar filmes
 */
router.get('/search', authMiddleware_1.authMiddleware, movieController_1.searchMovies);
/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Adicionar um novo filme
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []  # Autenticação com JWT
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Título do Filme"
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-10-15"
 *               trailerLink:
 *                 type: string
 *                 example: "http://link-do-trailer.com"
 *               genres:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Ação", "Aventura"]
 *               poster:
 *                 type: string
 *                 format: binary
 *                 description: "O pôster do filme, deve ser enviado como um arquivo"
 *     responses:
 *       201:
 *         description: Filme adicionado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       401:
 *         description: Acesso negado, token inválido
 *       403:
 *         description: Acesso negado, permissões insuficientes
 *       400:
 *         description: Erro ao adicionar o filme
 */
router.post('/', authMiddleware_1.authMiddleware, (0, roleMiddleware_1.roleMiddleware)('Admin'), movieController_1.uploadPoster, movieController_1.addMovie);
/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Atualizar um filme existente
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []  # Autenticação com JWT
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do filme a ser atualizado
 *         schema:
 *           type: string
 *           example: "670e459f5fed602e3ac8d209"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Novo Título do Filme"
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-01"
 *               trailerLink:
 *                 type: string
 *                 example: "http://link-do-novo-trailer.com"
 *               genres:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Comédia", "Aventura"]
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       401:
 *         description: Acesso negado, token inválido
 *       403:
 *         description: Acesso negado, permissões insuficientes
 *       404:
 *         description: Filme não encontrado
 *       500:
 *         description: Erro ao atualizar o filme
 */
router.put('/:id', authMiddleware_1.authMiddleware, (0, roleMiddleware_1.roleMiddleware)('Admin'), movieController_1.updateMovie);
/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Deletar um filme existente
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []  # Autenticação com JWT
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do filme a ser deletado
 *         schema:
 *           type: string
 *           example: "670e45d15fed602e3ac8d20a"
 *     responses:
 *       200:
 *         description: Filme deletado com sucesso
 *       401:
 *         description: Acesso negado, token inválido
 *       403:
 *         description: Acesso negado, permissões insuficientes
 *       404:
 *         description: Filme não encontrado
 *       500:
 *         description: Erro ao deletar o filme
 */
router.delete('/:id', authMiddleware_1.authMiddleware, (0, roleMiddleware_1.roleMiddleware)('Admin'), movieController_1.deleteMovie);
exports.default = router;
//# sourceMappingURL=movieRoutes.js.map