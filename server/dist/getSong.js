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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSong = void 0;
const formatGeniusSong_1 = __importDefault(require("./utils/formatGeniusSong"));
const getSong = function (songID) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${process.env.API_URL}/songs/${songID}`, {
            method: "GET",
            headers: new Headers({
                Authorization: `Bearer ${process.env.CLIENT_ACCESS_TOKEN}`,
            }),
        });
        if (res.ok) {
            const data = yield res.json();
            return (0, formatGeniusSong_1.default)(data.response.song);
        }
        return null;
    });
};
exports.getSong = getSong;
exports.default = exports.getSong;
