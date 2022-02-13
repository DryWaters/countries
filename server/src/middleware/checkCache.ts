import {Request, Response} from 'express';

export default (req: Request, res: Response, next: (param?: unknown) => void): void => {
    console.log("About to check cache!");
    next();
}