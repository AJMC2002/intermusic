import { ref } from "vue";
import { defineStore } from "pinia";
import axios, { AxiosResponse } from "axios";
import { Song } from "../../../server/src/types";
import db from "../db";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const useSongStore = defineStore("songs", () => {
	const ids = ref<number[]>(
		db.ids
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value)
	);
	const songs = ref<Song[]>([]);
	async function updateSongs(): Promise<void> {
		songs.value = await Promise.all(
			ids.value.map(async (id: number): Promise<Song> => {
				const res: AxiosResponse = await axios.get(`/${id}`);
				return res.data;
			})
		);
	}
	return { ids, songs, updateSongs };
});
