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
var __1 = __importDefault(require("../.."));
var supertest_1 = __importDefault(require("supertest"));
var fs_1 = require("fs");
var sharp_1 = __importDefault(require("sharp"));
var data_1 = __importDefault(require("../../utilities/data"));
var request = (0, supertest_1.default)(__1.default);
var test = (0, data_1.default)('fjord.jpg');
console.log(test);
// eslint-disable-next-line no-undef
describe('Test "Image" End Point', function () {
    // eslint-disable-next-line no-undef
    it('Gets Status of The End Point', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/image')
                    // eslint-disable-next-line no-undef
                ];
                case 1:
                    response = _a.sent();
                    // eslint-disable-next-line no-undef
                    expect(response.status).toBe(200);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    // eslint-disable-next-line no-undef
    it('Test The Return Object/Extention of "Images" End Point', function () { return __awaiter(void 0, void 0, void 0, function () {
        var image, metadata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile('../../MEAN/DEFAULT/images/full/fjord.jpg')];
                case 1:
                    image = _a.sent();
                    return [4 /*yield*/, (0, sharp_1.default)(image).metadata()
                        // eslint-disable-next-line no-undef
                    ];
                case 2:
                    metadata = _a.sent();
                    // eslint-disable-next-line no-undef
                    expect(metadata.format).toBe('jpeg');
                    return [2 /*return*/];
            }
        });
    }); });
});
// eslint-disable-next-line no-undef
describe('Image Functions', function () {
    // eslint-disable-next-line no-undef
    it('Returns the Width and Height of an Image', function () { return __awaiter(void 0, void 0, void 0, function () {
        var image, metadata, width, height;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile('../../MEAN/DEFAULT/images/full/fjord.jpg')];
                case 1:
                    image = _a.sent();
                    return [4 /*yield*/, (0, sharp_1.default)(image).metadata()];
                case 2:
                    metadata = _a.sent();
                    width = metadata.width;
                    height = metadata.height;
                    // eslint-disable-next-line no-undef
                    expect(width).toBe(1920);
                    // eslint-disable-next-line no-undef
                    expect(height).toBe(1280);
                    return [2 /*return*/];
            }
        });
    }); });
    // eslint-disable-next-line no-undef
    it('Properly Resizes Image and Return Correct Width and Height', function () { return __awaiter(void 0, void 0, void 0, function () {
        var image, new_image, metadata, width, height;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile('../../MEAN/DEFAULT/images/full/fjord.jpg')
                    // eslint-disable-next-line camelcase
                ];
                case 1:
                    image = _a.sent();
                    return [4 /*yield*/, (0, sharp_1.default)(image).resize(300, 300).toBuffer()];
                case 2:
                    new_image = _a.sent();
                    return [4 /*yield*/, (0, sharp_1.default)(new_image).metadata()];
                case 3:
                    metadata = _a.sent();
                    width = metadata.width;
                    height = metadata.height;
                    // eslint-disable-next-line no-undef
                    expect(width).toBe(300);
                    // eslint-disable-next-line no-undef
                    expect(height).toBe(300);
                    return [2 /*return*/];
            }
        });
    }); });
});
