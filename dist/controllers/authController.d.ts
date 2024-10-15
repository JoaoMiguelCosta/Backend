import { Request, Response } from 'express';
interface RegisterRequestBody {
    name: string;
    email: string;
    password: string;
}
export declare const register: (req: Request<{}, {}, RegisterRequestBody>, res: Response) => Promise<void>;
interface LoginRequestBody {
    email: string;
    password: string;
}
export declare const login: (req: Request<{}, {}, LoginRequestBody>, res: Response) => Promise<void>;
export {};
