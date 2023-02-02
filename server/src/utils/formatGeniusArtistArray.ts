import { Artist, GeniusArtist } from "../types";
import formatGeniusArtist from "./formatGeniusArtist";

const formatGeniusArtistArray = function (
	artists: GeniusArtist[]
): Artist[] {
	return artists.map(formatGeniusArtist).sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
};

export default formatGeniusArtistArray;
