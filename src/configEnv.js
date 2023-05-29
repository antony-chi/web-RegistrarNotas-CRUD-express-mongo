import { config } from "dotenv"; //importamos el modulo dotenv para usar variable de entorno

config();//ejecutamos la funcion para leer la varable .ENV
console.log(process.env.MONGODB_URI)