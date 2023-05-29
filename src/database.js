import { connect } from "mongoose";

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
