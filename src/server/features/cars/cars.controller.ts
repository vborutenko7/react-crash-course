import type { Request, Response } from 'express';
import { carsService } from './cars.service.ts';

export class CarsController {
  async getCars(req: Request, res: Response) {
    const result = await carsService.getCars();
    res.json(result);
  }
}

export const carsController = new CarsController();
