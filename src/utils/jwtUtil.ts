import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, role: string) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET as string);
};