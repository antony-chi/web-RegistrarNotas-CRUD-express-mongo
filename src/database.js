import { connect } from "mongoose";
import { config } from "dotenv"; //importamos el modulo dotenv para usar variable de entorno

config();//ejecutamos la funcion para leer la varable .ENV
console.log(process.env.MONGODB_URI)

export async function connectDB() {
  try {
    console.log("conectando");
    //mongoose.set('strictPopulate', false);
    const db = await connect("mongodb://localhost:27017/notas-CRUD-mongo", {
      useNewUrlParser: true,
    });
    console.log("successful connection " +db.connection.name);
  } catch (error) {
    console.error("error conexion " + error);
  }
}
