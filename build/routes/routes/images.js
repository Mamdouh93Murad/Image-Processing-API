"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilities/logger"));
var images = express_1.default.Router();
images.get('/image', logger_1.default, function (req, res) {
    res.send('CONVERTING');
});
exports.default = images;
