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
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - movieId
 *         - userId
 *         - rating
 *         - comment
 *       properties:
 *         id:
 *           type: string
 *           description: ID único da avaliação (gerado automaticamente pelo MongoDB)
 *         movieId:
 *           type: string
 *           description: ID do filme que está sendo avaliado
 *         userId:
 *           type: string
 *           description: ID do usuário que fez a avaliação
 *         rating:
 *           type: integer
 *           format: int32
 *           description: Avaliação do filme, de 1 a 5
 *           minimum: 1
 *           maximum: 5
 *         comment:
 *           type: string
 *           description: Comentário do usuário sobre o filme
 *       example:
 *         movieId: "603d2b431a0c5c001c8f7328"
 *         userId: "603d2b431a0c5c001c8f7329"
 *         rating: 4
 *         comment: "Um filme incrível, cheio de reviravoltas!"
 */
interface Review extends Document {
    movieId: string;
    userId: string;
    rating: number;
    comment: string;
}
declare const ReviewModel: mongoose.Model<Review, {}, {}, {}, mongoose.Document<unknown, {}, Review> & Review & Required<{
    _id: unknown;
}> & {
    __v?: number | undefined;
}, any>;
export default ReviewModel;
