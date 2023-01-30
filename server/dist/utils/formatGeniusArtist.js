"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatGeniusArtist = void 0;
const formatGeniusArtist = function (artist) {
    return {
        id: artist.id,
        name: artist.name,
        image_url: artist.image_url,
        genius_url: artist.url,
    };
};
exports.formatGeniusArtist = formatGeniusArtist;
exports.default = exports.formatGeniusArtist;
