"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = require("express-handlebars");
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//se cambio por import exphbs from "express-handlebar"

//aplicacion de servidor
var app = (0, _express["default"])();

//------configuracion de motor de plantilla
app.set("views", _path["default"].join(__dirname, "views"));
var hbs = (0, _expressHandlebars.create)({
  //se creo la constante HBS = create
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  //indicamos donde se encuentra la carpeta layouts
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  //indicamos como se llama la carpteta PARCIALS cuando cambiamos el nombre
  defaultLayout: "main",
  extname: ".hbs"
});
//aqui metimos la constante creada HBS en el argumento .engine
app.engine(".hbs", hbs.engine);
//_________configuracion de motor de platilla ______

//usamos la confihuracion
app.set("view engine", ".hbs");

//middlewares
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
//Routes
app.use(_index["default"]);

//static file carpeta public
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;