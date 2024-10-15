import { Request, Response, NextFunction } from 'express';
export declare const roleMiddleware: (role: 'User' | 'Admin') => (req: Request, res: Response, next: NextFunction) => void;
