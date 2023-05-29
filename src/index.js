import app from "./app";
import { connectDB } from "./database";
import {PORT} from "./configEnv"

//llamamos la conexion
connectDB()

app.listen(PORT);
console.log("server on port ", PORT);
