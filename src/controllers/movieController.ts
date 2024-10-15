import { Request, Response } from 'express';
import Movie from '../models/movieModel';
import upload from '../middleware/multerMiddleware';


export const searchMovies = async (req: Request, res: Response) => {
    const { page = 1, limit = 10, sortBy = 'releaseDate', search, genre } = req.query;

    try {
        const query: any = {};

        if (genre) {
            query.genres = { $in: [genre] };
        }

        if (typeof search === 'string') {
            const regex = new RegExp(search, 'i');
            query.title = regex;
        }

        const sortKey = typeof sortBy === 'string' ? sortBy : 'releaseDate';

        const movies = await Movie.find(query)
            .sort({ [sortKey]: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const totalMovies = await Movie.countDocuments(query);
        const totalPages = Math.ceil(totalMovies / Number(limit));

        res.status(200).json({
            totalPages,
            currentPage: Number(page),
            movies,
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const getMovies = async (_req: Request, res: Response) => {
    try {
        // Busca todos os filmes no banco de dados
        const movies = await Movie.find();

        // Se a lista estiver vazia, retornar 404
        if (movies.length === 0) {
            res.status(404).json({ message: 'Nenhum filme encontrado' });
            return
        }

        // Se tudo estiver correto, retornar a lista de filmes
        res.status(200).json(movies);
    } catch (error) {
        // Se houver um erro, retornar 500
        res.status(500).json({ message: 'Erro ao buscar filmes', error });
    }
};


export const addMovie = async (req: Request, res: Response): Promise<void> => {
    const { title, releaseDate, trailerLink, genres } = req.body;
    const poster = req.file?.filename;

    if (!poster) {
        res.status(400).json({ message: 'Pôster é obrigatório!' });
        return;
    }

    try {
        const newMovie = await Movie.create({ title, releaseDate, trailerLink, poster, genres });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o filme', error });
    }
};


export const updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, releaseDate, trailerLink, poster, genres } = req.body;

    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, { title, releaseDate, trailerLink, poster, genres }, { new: true });
        if (!updatedMovie) {
             res.status(404).json({ message: 'Filme não encontrado' });
             return
        }

        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ message: 'Error updating movie', error });
    }
};


export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting movie', error });
    }
};


export const uploadPoster = upload.single('poster')