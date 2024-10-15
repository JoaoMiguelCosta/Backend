"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPoster = exports.deleteMovie = exports.updateMovie = exports.addMovie = exports.getMovies = exports.searchMovies = void 0;
const movieModel_1 = __importDefault(require("../models/movieModel"));
const multerMiddleware_1 = __importDefault(require("../middleware/multerMiddleware"));
const searchMovies = async (req, res) => {
    const { page = 1, limit = 10, sortBy = 'releaseDate', search, genre } = req.query;
    try {
        const query = {};
        if (genre) {
            query.genres = { $in: [genre] };
        }
        if (typeof search === 'string') {
            const regex = new RegExp(search, 'i');
            query.title = regex;
        }
        const sortKey = typeof sortBy === 'string' ? sortBy : 'releaseDate';
        const movies = await movieModel_1.default.find(query)
            .sort({ [sortKey]: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        const totalMovies = await movieModel_1.default.countDocuments(query);
        const totalPages = Math.ceil(totalMovies / Number(limit));
        res.status(200).json({
            totalPages,
            currentPage: Number(page),
            movies,
        });
    }
    catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.searchMovies = searchMovies;
const getMovies = async (_req, res) => {
    try {
        // Busca todos os filmes no banco de dados
        const movies = await movieModel_1.default.find();
        // Se a lista estiver vazia, retornar 404
        if (movies.length === 0) {
            res.status(404).json({ message: 'Nenhum filme encontrado' });
            return;
        }
        // Se tudo estiver correto, retornar a lista de filmes
        res.status(200).json(movies);
    }
    catch (error) {
        // Se houver um erro, retornar 500
        res.status(500).json({ message: 'Erro ao buscar filmes', error });
    }
};
exports.getMovies = getMovies;
const addMovie = async (req, res) => {
    const { title, releaseDate, trailerLink, genres } = req.body;
    const poster = req.file?.filename;
    if (!poster) {
        res.status(400).json({ message: 'Pôster é obrigatório!' });
        return;
    }
    try {
        const newMovie = await movieModel_1.default.create({ title, releaseDate, trailerLink, poster, genres });
        res.status(201).json(newMovie);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o filme', error });
    }
};
exports.addMovie = addMovie;
const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, releaseDate, trailerLink, poster, genres } = req.body;
    try {
        const updatedMovie = await movieModel_1.default.findByIdAndUpdate(id, { title, releaseDate, trailerLink, poster, genres }, { new: true });
        if (!updatedMovie) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return;
        }
        res.json(updatedMovie);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating movie', error });
    }
};
exports.updateMovie = updateMovie;
const deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMovie = await movieModel_1.default.findByIdAndDelete(id);
        if (!deletedMovie) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return;
        }
        res.json({ message: 'Movie deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting movie', error });
    }
};
exports.deleteMovie = deleteMovie;
exports.uploadPoster = multerMiddleware_1.default.single('poster');
//# sourceMappingURL=movieController.js.map