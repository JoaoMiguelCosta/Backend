import mongoose, { Schema, Document } from 'mongoose';

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
    movieId: string; // ID do filme
    userId: string; // ID do usuário
    rating: number; // Avaliação de 1 a 5
    comment: string; // Comentário do usuário
}

const ReviewSchema: Schema = new Schema({
    movieId: { type: String, required: true },
    userId: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
}, { timestamps: true });

const ReviewModel = mongoose.model<Review>('Review', ReviewSchema);
export default ReviewModel;