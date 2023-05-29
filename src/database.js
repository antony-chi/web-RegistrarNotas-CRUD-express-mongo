import { connect } from "mongoose";
import {MONGODB_URI} from "./configEnv"

export async function connectDB() {
  try {
    console.log("conectando");
    //mongoose.set('strictPopulate', false);
    const db = await connect(MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("successful connection " +db.connection.name);
  } catch (error) {
    console.error("error conexion " + error);
  }
}
