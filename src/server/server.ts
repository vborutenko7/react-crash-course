import express from 'express';
import ViteExpress from 'vite-express';
import authRoutes from './features/auth/auth.routes.ts';
import weatherRoutes from './features/weather/weather.routes.ts';
import carsRoutes from './features/cars/cars.routes.ts';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/cars', carsRoutes);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening port ${port}`),
);
