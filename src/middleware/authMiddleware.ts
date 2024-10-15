import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';


interface UserPayload extends JwtPayload {
    userId: string; 
    role: string; 
}


declare global {
    namespace Express {
        interface Request {
            user?: UserPayload; 
        }
    }
}


export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1]; 

    if (!token) {
        res.status(401).json({ message: 'Access denied, token missing!' });
        return; 
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
        req.user = verified;
        next(); 
    } catch (error) {
        res.status(400).json({ message: 'Invalid token', error }); 
    }
};