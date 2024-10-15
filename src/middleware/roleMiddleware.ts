import { Request, Response, NextFunction } from 'express';


export const roleMiddleware = (role: 'User' | 'Admin') => {
    return (req: Request, res: Response, next: NextFunction) => {
       
        if (!req.user) {
            res.status(403).json({ message: 'Access denied, insufficient permissions' });
        } else if (req.user.role !== role) {
            res.status(403).json({ message: 'Access denied, insufficient permissions' });
        } else {
            next(); 
        }
    };
};