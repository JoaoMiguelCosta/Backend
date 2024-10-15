"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviews = exports.addReview = void 0;
const reviewModel_1 = __importDefault(require("../models/reviewModel"));
const addReview = async (req, res) => {
    const { movieId, userId, rating, comment } = req.body;
    try {
        const newReview = await reviewModel_1.default.create({ movieId, userId, rating, comment });
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};
exports.addReview = addReview;
const getReviews = async (req, res) => {
    const { movieId } = req.params;
    try {
        const reviews = await reviewModel_1.default.find({ movieId });
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};
exports.getReviews = getReviews;
//# sourceMappingURL=reviewController.js.map