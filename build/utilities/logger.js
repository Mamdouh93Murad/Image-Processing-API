"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_color_1 = __importDefault(require("cli-color"));
var logger = function (req, res, next) {
    var url = req.url;
    console.log(cli_color_1.default.green("ENDPOINT ".concat(url, " : visited")));
    next();
};
exports.default = logger;
