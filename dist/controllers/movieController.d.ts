/// <reference types="qs" />
import { Request, Response } from 'express';
export declare const searchMovies: (req: Request, res: Response) => Promise<void>;
export declare const getMovies: (_req: Request, res: Response) => Promise<void>;
export declare const addMovie: (req: Request, res: Response) => Promise<void>;
export declare const updateMovie: (req: Request, res: Response) => Promise<void>;
export declare const deleteMovie: (req: Request, res: Response) => Promise<void>;
export declare const uploadPoster: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
