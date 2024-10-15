import { Request, Response } from 'express';
import User from '../models/userModel';

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, role } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, email, role }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};


export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};