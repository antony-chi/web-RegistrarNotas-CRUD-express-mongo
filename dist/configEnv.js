"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
//importamos el modulo dotenv para usar variable de entorno

(0, _dotenv.config)(); //ejecutamos la funcion para leer la varable .ENV
//console.log(process.env.MONGODB_URI)
var MONGODB_URI = process.env.MONGODB_URI; //|| "mongodb://localhost/test" //indica, si no se encuentra la conexion MONGO_URI crea una conexion local y crea una BD nombre TEST
exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 300;
exports.PORT = PORT;