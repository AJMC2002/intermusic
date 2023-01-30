import { GeniusMedia } from "../types";

export const getYouTubeURL = function (media: GeniusMedia[]): string | null {
	const youtube_media: GeniusMedia | undefined = media.find((source) => {
		return source.provider === "youtube";
	});
	return youtube_media == null ? null : youtube_media.url;
};

export default getYouTubeURL;
