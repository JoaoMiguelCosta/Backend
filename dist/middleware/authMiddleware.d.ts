import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
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
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export {};
