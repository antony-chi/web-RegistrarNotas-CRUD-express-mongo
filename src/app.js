import express from "express";
import { create } from "express-handlebars"; //se cambio por import exphbs from "express-handlebar"
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

//aplicacion de servidor
const app = express();

//------configuracion de motor de plantilla
app.set("views", path.join(__dirname, "views"));

const hbs = create({
  //se creo la constante HBS = create
  layoutsDir: path.join(app.get("views"), "layouts"), //indicamos donde se encuentra la carpeta layouts
  partialsDir: path.join(app.get("views"), "partials"), //indicamos como se llama la carpteta PARCIALS cuando cambiamos el nombre
  defaultLayout: "main",
  extname: ".hbs",
});
//aqui metimos la constante creada HBS en el argumento .engine
app.engine(".hbs", hbs.engine);
//_________configuracion de motor de platilla ______

//usamos la confihuracion
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false}))
//Routes
app.use(indexRoutes);

export default app;
