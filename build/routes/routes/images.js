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
var images = express_1.default.Router();
var names = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
images.get('/image', logger_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, width, height, file, folder, image, file;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.query.name;
                width = req.query.width;
                height = req.query.height;
                if (!(width === undefined)) return [3 /*break*/, 3];
                if (!names.includes(name)) return [3 /*break*/, 2];
                if (!fs_1.default.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) return [3 /*break*/, 2];
                file = process.cwd() + '/images/full/' + name + '.jpg';
                return [4 /*yield*/, res.sendFile(file)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [3 /*break*/, 14];
            case 3:
                if (!names.includes(name)) return [3 /*break*/, 13];
                if (!fs_1.default.existsSync(process.cwd() + '/images/full/' + name + '.jpg')) return [3 /*break*/, 12];
                folder = width;
                if (!!fs_1.default.existsSync(process.cwd() + '/images/full/' + folder)) return [3 /*break*/, 5];
                return [4 /*yield*/, fs_1.default.mkdir(process.cwd() + '/images/full/' + folder, function () { console.log('CREATED'); })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                if (!!fs_1.default.existsSync(process.cwd() + '/images/full/' + folder + '/' + name + '.jpg')) return [3 /*break*/, 10];
                return [4 /*yield*/, Number(width)];
            case 6:
                width = _a.sent();
                return [4 /*yield*/, Number(height)];
            case 7:
                height = _a.sent();
                return [4 /*yield*/, (0, data_1.convert)(name + '.jpg', width, height)];
            case 8:
                image = _a.sent();
                return [4 /*yield*/, (0, data_1.save)(image, name, folder)];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10:
                file = process.cwd() + '/images/full/' + folder + '/' + name + '.jpg';
                return [4 /*yield*/, res.sendFile(file)];
            case 11:
                _a.sent();
                _a.label = 12;
            case 12: return [3 /*break*/, 14];
            case 13:
                res.send('WRONG NAME');
                _a.label = 14;
            case 14: return [2 /*return*/];
        }
    });
}); });
exports.default = images;
