import { Request, Response } from 'express';

export interface IMyContext {
  req: Request;
  res: Response;
}
