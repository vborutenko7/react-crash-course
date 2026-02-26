import express from 'express';
import ViteExpress from 'vite-express';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.get('/api/message', (_, res) => res.send('Hello from express!'));

app.get('/api/weather', async (_req, res) => {
  try {
    // Minsk координаты
    const latitude = 53.9;
    const longitude = 27.5667;

    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', String(latitude));
    url.searchParams.set('longitude', String(longitude));
    url.searchParams.set('current', 'temperature_2m');
    url.searchParams.set('timezone', 'auto');

    const response = await fetch(url);
    if (!response.ok) {
      res.status(502).json({
        error: 'Upstream weather api error',
        status: response.status,
      });
      return;
    }

    const data: any = await response.json();
    const temperature = data?.current?.temperature_2m;
    const unit = data?.current_units?.temperature_2m ?? '°C';
    const time = data?.current?.time;

    res.setHeader('Cache-Control', 'no-store');
    res.json({
      city: 'Minsk',
      temperature,
      unit,
      time,
      source: 'open-meteo.com',
    });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening port ${port}`),
);
