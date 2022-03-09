"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
// import data from './utilities/data'
var cli_color_1 = __importDefault(require("cli-color"));
var app = (0, express_1.default)();
var port = 3000;
// data('fjord.jpg')
app.use('/', index_1.default);
// start the Express server
app.listen(port, function () {
    console.log(cli_color_1.default.green("server started at http://localhost:".concat(port)));
});
exports.default = app;
