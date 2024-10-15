import { Request, Response } from 'express';
import ReviewModel from '../models/reviewModel';

export const addReview = async (req: Request, res: Response) => {
    const { movieId, userId, rating, comment } = req.body;

    try {
        const newReview = await ReviewModel.create({ movieId, userId, rating, comment });
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

export const getReviews = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const reviews = await ReviewModel.find({ movieId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};