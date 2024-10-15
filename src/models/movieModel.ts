import mongoose, { Document, Schema } from 'mongoose';

/**
/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - releaseDate
 *         - trailerLink
 *         - poster
 *         - genres
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único do filme (gerado automaticamente pelo MongoDB)
 *           example: "60d21b4667d0d8992e610c85" // Exemplo de ID
 *         title:
 *           type: string
 *           description: Título do filme
 *           example: "Inception"
 *         releaseDate:
 *           type: string
 *           format: date
 *           description: Data de lançamento do filme
 *           example: "2010-07-16"
 *         trailerLink:
 *           type: string
 *           description: URL do trailer do filme
 *           example: "https://www.youtube.com/watch?v=YoHD9XEInc0"
 *         poster:
 *           type: string
 *           description: Nome do arquivo do pôster do filme
 *           example: "inception.jpg"
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de gêneros do filme
 *           example: ["Action", "Sci-Fi", "Thriller"]
 *       example:  // Este bloco fornece um exemplo de um objeto Movie
 *         _id: "60d21b4667d0d8992e610c85" // Exemplo de ID
 *         title: "Inception"
 *         releaseDate: "2010-07-16"
 *         trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0"
 *         poster: "inception.jpg"
 *         genres: ["Action", "Sci-Fi", "Thriller"]
 */
export interface IMovie extends Document {
    title: string;
    releaseDate: Date;
    trailerLink: string;
    poster: string;
    genres: string[];
}

const movieSchema: Schema<IMovie> = new Schema({
    title: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    trailerLink: { type: String, required: true },
    poster: { type: String, required: true },
    genres: { type: [String], required: true },
}, {
    timestamps: true,
});

const Movie = mongoose.model<IMovie>('Movie', movieSchema);

export default Movie;