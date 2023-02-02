import { Artist, GeniusArtist } from "../types";

const formatGeniusArtist = function (artist: GeniusArtist): Artist {
	return {
		id: artist.id,
		name: artist.name,
		image_url: artist.image_url,
		genius_url: artist.url,
	};
};

export default formatGeniusArtist;
