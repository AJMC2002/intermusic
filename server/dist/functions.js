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
exports.getLyrics = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = __importDefault(require("cheerio"));
const getLyrics = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, node_fetch_1.default)(url);
        const html = yield res.text();
        const $ = cheerio_1.default.load(html);
        let lyrics = $('div[class="lyrics"]').text().trim();
        if (!lyrics) {
            lyrics = "";
            $('div[class^="Lyrics__Container"]').each((i, elem) => {
                if ($(elem).text().length !== 0) {
                    const snippet = $(elem)
                        .html()
                        .replace(/<br>/g, "\n")
                        .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "");
                    lyrics += $("<textarea/>").html(snippet).text().trim() + "\n\n";
                }
            });
        }
        if (!lyrics)
            return null;
        return lyrics.trim();
    });
};
exports.getLyrics = getLyrics;
//# sourceMappingURL=functions.js.map