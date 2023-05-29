import { config } from "dotenv"; //importamos el modulo dotenv para usar variable de entorno

config();//ejecutamos la funcion para leer la varable .ENV
//console.log(process.env.MONGODB_URI)
export const MONGODB_URI = process.env.MONGODB_URI
//|| "mongodb://localhost/test" //indica, si no se encuentra la conexion MONGO_URI crea una conexion local y crea una BD nombre TEST