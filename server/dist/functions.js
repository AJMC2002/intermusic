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
exports.getLyrics = exports.getSong = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const cheerio_1 = __importDefault(require("cheerio"));
dotenv_1.default.config({
    path: ".env",
});
const getSong = function (songID) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${process.env.API_URL}/songs/${songID}`, {
            method: "GET",
            headers: new Headers({
                Authorization: `Bearer ${process.env.CLIENT_ACCESS_TOKEN}`,
            }),
        });
        if (res.ok) {
            const json = yield res.json();
            const song = json.response.song;
            const lyrics = yield (0, exports.getLyrics)(`${process.env.GENIUS_URL}${song.path}`);
            return {
                id: songID,
                language: song.language,
                release_date: song.release_date,
                song_art_image_thumbnail_url: song.song_art_image_thumbnail_url,
                title: song.title,
                artist_names: song.artist_names,
                media: song.media,
                lyrics: lyrics,
            };
        }
        return null;
    });
};
exports.getSong = getSong;
const getLyrics = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const html = yield res.text();
        const $ = cheerio_1.default.load(html);
        let lyrics = $('div[class="lyrics"]').text().trim();
        if (!lyrics) {
            lyrics = "";
            $('div[class^="Lyrics__Container"]').each((i, elem) => {
                var _a;
                if ($(elem).text().length !== 0) {
                    const snippet = (_a = $(elem)
                        .html()) === null || _a === void 0 ? void 0 : _a.replace(/<br>/g, "\n").replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "");
                    if (snippet !== undefined) {
                        lyrics += $("<textarea/>").html(snippet).text().trim() + "\n\n";
                    }
                }
            });
        }
        if (!lyrics)
            return null;
        return lyrics.trim();
    });
};
exports.getLyrics = getLyrics;