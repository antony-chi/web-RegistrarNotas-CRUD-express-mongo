import express from "express";

//aplicacion de servidor
const app = express();

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(3000);
console.log("server on port ", 3000);
