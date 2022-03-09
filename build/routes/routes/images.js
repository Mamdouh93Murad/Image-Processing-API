"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilities/logger"));
var fs_1 = __importDefault(require("fs"));
var data_1 = require("../../utilities/data");
var cli_color_1 = __importDefault(require("cli-color"));
var images = express_1.default.Router();
var names = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
images.get('/image', logger_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, width, height, file, str1, str2, image, file, file;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.query.name;
                width = req.query.width;
                height = req.query.height;
                if (!(name !== undefined)) return [3 /*break*/, 12];
                if (isNaN(parseInt(width)) === true && isNaN(parseInt(height)) === true) {
                    if (names.includes(name)) {
                        if (fs_1.default.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) {
                            file = process.cwd() + '/images/full/' + name + '.jpg';
                            res.sendFile(file);
                        }
                        // eslint-disable-next-line no-empty
                    }
                    else {
                        res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME');
                        console.error(cli_color_1.default.red('FILE DOES NOT EXIST, WRONG IMAGE NAME'));
                    }
                }
                if (!names.includes(name)) return [3 /*break*/, 10];
                if (!((width !== undefined && isNaN(parseInt(width)) === true) || (height !== undefined && isNaN(parseInt(height)) === true) || parseInt(width) < 1 || parseInt(height) < 1)) return [3 /*break*/, 1];
                res.send('Size Can not be Negative, Zero, String or NaN. Please Insert Positive Number');
                return [3 /*break*/, 9];
            case 1:
                if (!fs_1.default.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) return [3 /*break*/, 9];
                str1 = width;
                str2 = height;
                if (!(!fs_1.default.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2) && (isNaN(parseInt(width)) === false || isNaN(parseInt(height)) === false))) return [3 /*break*/, 3];
                return [4 /*yield*/, fs_1.default.mkdir(process.cwd() + '/images/full/' + str1 + 'x' + str2, function () { console.log(cli_color_1.default.green(' FOLDER CREATED')); })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                if (!((!fs_1.default.existsSync(process.cwd() + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg')) && (isNaN(parseInt(width)) === false && isNaN(parseInt(height)) === false))) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, data_1.convert)(name + '.jpg', parseInt(width), parseInt(height))];
            case 4:
                image = _a.sent();
                return [4 /*yield*/, (0, data_1.save)(image, name, str1, str2)];
            case 5:
                _a.sent();
                console.log(cli_color_1.default.green(' IMAGE CREATED AND SAVED'));
                _a.label = 6;
            case 6:
                if (!(str1 === undefined || str2 === undefined)) return [3 /*break*/, 7];
                file = process.cwd() + '/images/full/' + name + '.jpg';
                res.sendFile(file);
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, process.cwd()];
            case 8:
                file = (_a.sent()) + '/images/full/' + str1 + 'x' + str2 + '/' + name + '.jpg';
                res.sendFile(file);
                _a.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                res.send('FILE DOES NOT EXIST, WRONG IMAGE NAME');
                console.error(cli_color_1.default.red('FILE DOES NOT EXIST, WRONG IMAGE NAME'));
                _a.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                res.send('Please Specify Image name and Optionally Width and Height Value');
                _a.label = 13;
            case 13: return [2 /*return*/];
        }
    });
}); });
exports.default = images;
