"use strict";

var _app = _interopRequireDefault(require("./app"));
var _database = require("./database");
var _configEnv = require("./configEnv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//llamamos la conexion
(0, _database.connectDB)();
_app["default"].listen(_configEnv.PORT);
console.log("server on port ", _configEnv.PORT);