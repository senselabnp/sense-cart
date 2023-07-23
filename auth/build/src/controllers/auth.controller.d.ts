import { Request, Response } from 'express';
/**
 * Create log
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export declare const register: (_req: Request, res: Response) => Promise<void>;
/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export declare const login: (req: Request, res: Response) => Promise<void>;
/**
 * Get the list of logs
 *
 * @param _req object
 * @param res object
 * @param next function
 */
export declare const logout: (req: Request, res: Response) => Promise<void>;
