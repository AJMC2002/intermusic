import { load } from "cheerio";
import type { CheerioAPI, Element } from "cheerio";
import type { Song } from "./types";
import { config } from "dotenv";

config({
	path: ".env.local",
});

const getLyrics = async function (url: string): Promise<string> {
	const res: Response = await fetch(url);
	const html: string = await res.text();
	const $: CheerioAPI = load(html);
	let lyrics: string = $('div[class="lyrics"]').text().trim();
	if (!lyrics) {
		lyrics = "";
		$('div[class^="Lyrics__Container"]').each((i: number, elem: Element) => {
			if ($(elem).text().length !== 0) {
				const snippet: string | undefined = $(elem)
					.html()
					?.replace(/<br>/g, "\n")
					.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "");
				if (snippet !== undefined) {
					lyrics += $("<textarea/>").html(snippet).text().trim() + "\n\n";
				}
			}
		});
	}
	return lyrics.trim();
};

const EMPTY_SONG: Song = {
	id: 0,
	language: "",
	release_date: "",
	song_art_image_thumbnail_url: "",
	title: "",
	artist_names: "",
	media: "",
	lyrics: "",
};

export const getSong = async function (songID: number): Promise<Song> {
	const res: Response = await fetch(`${process.env.API_URL}/songs/${songID}`, {
		method: "GET",
		headers: new Headers({
			Authorization: `Bearer ${process.env.CLIENT_ACCESS_TOKEN}`,
		}),
	});
	if (res.ok) {
		const json = await res.json();
		const song = json.response.song;
		const lyrics: string | null = await getLyrics(
			`${process.env.GENIUS_URL}${song.path}`
		);

		return {
			id: songID,
			language: song.language,
			release_date: song.release_date,
			song_art_image_thumbnail_url: song.song_art_image_thumbnail_url,
			title: song.title,
			artist_names: song.artist_names,
			media: song.media,
			lyrics: lyrics,
		};
	}
	return EMPTY_SONG;
};

export default getSong;
