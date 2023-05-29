import "./configEnv"
import app from "./app";
import { connectDB } from "./database";

//llamamos la conexion
connectDB()

app.listen(3000);
console.log("server on port ", 3000);
