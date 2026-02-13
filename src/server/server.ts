import express from 'express';
import ViteExpress from "vite-express";



const server = express();
const port = Number(process.env.PORT) || 3001;

server.get("/message", (_, res) => res.send("Hello from express!"));



ViteExpress.listen(server, 3001, () => console.log(`Server is listening port ${port}`));