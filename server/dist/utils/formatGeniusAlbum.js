"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatGeniusAlbum = void 0;
const formatGeniusArtist_1 = __importDefault(require("./formatGeniusArtist"));
const formatGeniusAlbum = function (album) {
    if (album)
        return {
            id: album.id,
            name: album.name,
            artist: (0, formatGeniusArtist_1.default)(album.artist),
            image_url: album.cover_art_url,
            genius_url: album.url,
        };
    return null;
};
exports.formatGeniusAlbum = formatGeniusAlbum;
exports.default = exports.formatGeniusAlbum;
