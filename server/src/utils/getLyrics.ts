import { CheerioAPI, Element, load } from "cheerio";

export const getLyrics = async function (url: string): Promise<string> {
	const res: Response = await fetch(url);
	const html: string = await res.text();
	const $: CheerioAPI = load(html);
	let lyrics: string = $("div[class='lyrics']").text().trim();
	if (!lyrics) {
		lyrics = "";
		$("div[class^='Lyrics__Container']").each((i: number, elem: Element) => {
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

export default getLyrics;
