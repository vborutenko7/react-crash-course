import { Router } from 'express';
import { carsController } from './cars.controller.ts';

const router = Router();

router.get('/', carsController.getCars.bind(carsController));

export default router;
