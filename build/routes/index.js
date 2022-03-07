"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../utilities/logger"));
var images_1 = __importDefault(require("./routes/images"));
var routes = express_1.default.Router();
routes.get('/', logger_1.default, function (req, res) {
    var names = {
        1: 'Encenadaport',
        2: 'Fjord ',
        3: 'Iceland WaterFall',
        4: 'Palmtunnel',
        5: 'Santamonica '
    };
    res.write('List of Images Names :' + '\n');
    res.write('1- ' + names[1] + '\n');
    res.write('2- ' + names[2] + '\n');
    res.write('3- ' + names[3] + '\n');
    res.write('4- ' + names[4] + '\n');
    res.write('5- ' + names[5] + '\n');
    res.write(' \n Please enter url in the next form :' + ' /image?name="<NAME>"&width="<NUMBER>"&height="<NUMBER>" \n');
    res.end();
});
routes.use('/', images_1.default);
exports.default = routes;
