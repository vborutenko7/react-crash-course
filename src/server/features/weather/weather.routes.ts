import { Router } from 'express';
import { weatherController } from './weather.controller.ts';

const router = Router();

router.get('/', weatherController.getWeather.bind(weatherController));

export default router;
