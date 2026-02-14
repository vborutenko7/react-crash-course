import express from 'express';
import ViteExpress from "vite-express";



const app = express();
const port = Number(process.env.PORT) || 3001;

app.get("/message", (_, res) => res.send("Hello from express!"));



ViteExpress.listen(app, 3001, () => console.log(`Server is listening port ${port}`));