// Service for weather-related logic

export class WeatherService {
  async getWeather(location: string) {
    // Example: return static weather data for demonstration
    return {
      location,
      temperature: 25,
      condition: 'Sunny',
    };
  }

  async getMinskWeather() {
    // Minsk coordinates
    const latitude = 53.9;
    const longitude = 27.5667;
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', String(latitude));
    url.searchParams.set('longitude', String(longitude));
    url.searchParams.set('current', 'temperature_2m');
    url.searchParams.set('timezone', 'auto');

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Upstream weather api error: ' + response.status);
    }
    const data: any = await response.json();
    const temperature = data?.current?.temperature_2m;
    const unit = data?.current_units?.temperature_2m ?? '°C';
    const time = data?.current?.time;
    return {
      city: 'Minsk',
      temperature,
      unit,
      time,
      source: 'open-meteo.com',
    };
  }
}

export const weatherService = new WeatherService();
