"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYouTubeURL = void 0;
const getYouTubeURL = function (media) {
    const youtube_media = media.find((source) => {
        return source.provider === "youtube";
    });
    return youtube_media == null ? null : youtube_media.url;
};
exports.getYouTubeURL = getYouTubeURL;
exports.default = exports.getYouTubeURL;
