import { GeniusSong, Song } from "../types";
import formatGeniusAlbum from "./formatGeniusAlbum";
import formatGeniusArtist from "./formatGeniusArtist";
import formatGeniusArtistArray from "./formatGeniusArtistArray";
import getLyrics from "./getLyrics";
import getYouTubeURL from "./getYouTubeURL";

export const formatGeniusSong = async function (
	song: GeniusSong
): Promise<Song> {
	return {
		id: song.id,
		name: song.title,
		artist: formatGeniusArtist(song.primary_artist),
		featured_artists: formatGeniusArtistArray(song.featured_artists),
		album: formatGeniusAlbum(song.album),
		release_date: song.release_date,
		language: song.language,
		lyrics: await getLyrics(song.url),
		image_url: song.song_art_image_url,
		genius_url: song.url,
		youtube_url: getYouTubeURL(song.media),
	};
};

export default formatGeniusSong;
