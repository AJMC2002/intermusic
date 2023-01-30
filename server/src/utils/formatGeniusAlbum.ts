import { Album, GeniusAlbum } from "../types";
import formatGeniusArtist from "./formatGeniusArtist";

export const formatGeniusAlbum = function (
	album: GeniusAlbum | null
): Album | null {
	if (album)
		return {
			id: album.id,
			name: album.name,
			artist: formatGeniusArtist(album.artist),
			image_url: album.cover_art_url,
			genius_url: album.url,
		};
	return null;
};

export default formatGeniusAlbum;
