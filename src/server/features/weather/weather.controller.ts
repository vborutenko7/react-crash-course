import { weatherService } from './weather.service.ts';

export class WeatherController {
  async getWeather(req, res) {
    const weather = await weatherService.getMinskWeather();
    res.json(weather);
  }
}

export const weatherController = new WeatherController();
