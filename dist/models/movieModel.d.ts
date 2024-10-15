/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import mongoose, { Document } from 'mongoose';
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
declare const Movie: mongoose.Model<IMovie, {}, {}, {}, mongoose.Document<unknown, {}, IMovie> & IMovie & Required<{
    _id: unknown;
}> & {
    __v?: number | undefined;
}, any>;
export default Movie;
