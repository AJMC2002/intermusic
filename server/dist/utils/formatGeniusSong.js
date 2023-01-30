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
exports.formatGeniusSong = void 0;
const formatGeniusAlbum_1 = __importDefault(require("./formatGeniusAlbum"));
const formatGeniusArtist_1 = __importDefault(require("./formatGeniusArtist"));
const getLyrics_1 = __importDefault(require("./getLyrics"));
const getYouTubeURL_1 = __importDefault(require("./getYouTubeURL"));
const formatGeniusSong = function (song) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            id: song.id,
            name: song.title,
            artist: (0, formatGeniusArtist_1.default)(song.primary_artist),
            featured_artists: song.featured_artists.map(formatGeniusArtist_1.default),
            album: (0, formatGeniusAlbum_1.default)(song.album),
            release_date: song.release_date,
            language: song.language,
            lyrics: yield (0, getLyrics_1.default)(song.url),
            image_url: song.song_art_image_url,
            genius_url: song.url,
            youtube_url: (0, getYouTubeURL_1.default)(song.media),
        };
    });
};
exports.formatGeniusSong = formatGeniusSong;
exports.default = exports.formatGeniusSong;
