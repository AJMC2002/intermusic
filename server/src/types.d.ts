export type ResponseData = any;

export type GeniusSong = any;

export type GeniusArtist = any;

export type GeniusAlbum = any;

export type GeniusMedia = any;

export interface Artist {
	readonly id: number;
	readonly name: string;
	readonly image_url: string;
	readonly genius_url: string;
}

export interface Album {
	readonly id: number;
	readonly name: string;
	readonly artist: Artist;
	readonly image_url: string;
	readonly genius_url: string;
}

export interface Song {
	readonly id: number;
	readonly name: string;
	readonly artist: Artist;
	readonly featured_artists: Artist[];
	readonly album: Album | null;
	readonly release_date: string;
	readonly language: string;
	readonly lyrics: string;
	readonly image_url: string;
	readonly genius_url: string;
	readonly youtube_url: string | null;
}
