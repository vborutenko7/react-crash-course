import { Request, Response } from 'express';
import { weatherService } from './weather.service.ts';

export class WeatherController {
  async getWeather(req: Request, res: Response) {
    try {
      const weather = await weatherService.getMinskWeather();
      res.setHeader('Cache-Control', 'no-store');
      res.json(weather);
    } catch (e: any) {
      if (e.message && e.message.startsWith('Upstream weather api error')) {
        res.status(502).json({ error: e.message });
      } else {
        res.status(500).json({ error: 'Failed to fetch weather' });
      }
    }
  }
}

export const weatherController = new WeatherController();
