import express from 'express';
import ViteExpress from "vite-express";

const server = express();


server.get("/message", (_, res) => res.send("Hello from express!"));


ViteExpress.listen(server, 3001, () => console.log("Server is listening..."));