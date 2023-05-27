import express from "express";
import indexRoutes from './routes/index.routes'

//aplicacion de servidor
const app = express();

app.use(indexRoutes)



export default app;