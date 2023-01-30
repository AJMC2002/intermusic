<template>
	<div
		v-cloak
		class="relative mx-3 my-6 p-5 gap-5 rounded-lg flex flex-row items-center bg-black text-white before:-z-10 before:w-full before:h-full before:absolute before:top-3 before:left-3 before:rounded-lg before:bg-slate-600"
	>
		<img :src="song.song_art_image_thumbnail_url" alt="" class="w-32 h-32" />
		<div>
			<h1>{{ song.title }}</h1>
			<h3>{{ song.artist_names }}</h3>
			<h3>{{ song.id }}</h3>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { Song } from "@/types";

@Options({ props: { songID: Number } })
export default class SongCard extends Vue {
	songID!: number;
	song: Song = {
		id: 0,
		language: "",
		release_date: "",
		song_art_image_thumbnail_url: "",
		title: "",
		artist_names: "",
		media: "",
		lyrics: "",
	};
	isMounted = false;
	async mounted() {
		const res: AxiosResponse = await axios.get(
			`http://localhost:8081/api/${this.songID}`
		);
		if (res.status === HttpStatusCode.Ok) {
			this.song = res.data;
			this.isMounted = true;
			console.log(res);
		}
	}
}
</script>
