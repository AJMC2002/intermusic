import { ResponseData, Song } from "./types";
import formatGeniusSong from "./utils/formatGeniusSong";

export const getSong = async function (songID: number): Promise<Song | null> {
	const res: Response = await fetch(`${process.env.API_URL}/songs/${songID}`, {
		method: "GET",
		headers: new Headers({
			Authorization: `Bearer ${process.env.CLIENT_ACCESS_TOKEN}`,
		}),
	});
	if (res.ok) {
		const data: ResponseData = await res.json();
		return formatGeniusSong(data.response.song);
	}
	return null;
};

export default getSong;
