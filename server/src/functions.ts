
import fetch, {Response}  from "node-fetch";
import cheerio,{ CheerioAPI,Element }  from "cheerio";

export const getLyrics = async function (url:string):Promise<string|null> {
	const res:Response = await fetch(url);
	const html:string = await res.text();
	const $:CheerioAPI = cheerio.load(html);

	let lyrics:string = $('div[class="lyrics"]').text().trim();

	if (!lyrics) {
		lyrics = "";
		$('div[class^="Lyrics__Container"]').each((i: number, elem: Element) => {
			if ($(elem).text().length !== 0) {
				const snippet:string = $(elem)
					.html()!
					.replace(/<br>/g, "\n")
					.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "");
				lyrics += $("<textarea/>").html(snippet).text().trim() + "\n\n";
			}
		});
	}

	if (!lyrics) return null;
	return lyrics.trim();
};

