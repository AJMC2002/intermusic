<template>
	<div
		class="relative my-6 rounded-lg bg-black text-white before:-z-10 before:w-full before:h-full before:absolute before:top-3 before:left-3 before:rounded-lg before:bg-slate-600"
	>
		<div v-if="isSongFetched" class="p-5 gap-5 flex flex-row items-center">
			<img :src="song.image_url" alt="" class="w-32 h-32" />
			<div>
				<h1>{{ song.name }}</h1>
				<h3>{{ song.artist.name }}</h3>
				<h3>{{ "Ft." }}</h3>
			</div>
		</div>
		<font-awesome-icon
			v-else
			icon="spinner"
			class="relative top-1/2 left-1/2 w-12 h-12 p-10"
			pulse
		/>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { Song } from "@/types";

@Options({ props: { songID: Number } })
export default class SongCard extends Vue {
	songID!: number;
	isSongFetched = false;
	song: Song = {
		id: 0,
		name: "",
		artist: {
			id: 0,
			name: "",
			image_url: "",
			genius_url: "",
		},
		featured_artists: [],
		album: null,
		release_date: "",
		language: "",
		lyrics: "",
		image_url: "",
		genius_url: "",
		youtube_url: null,
	};
	async created() {
		const res: AxiosResponse = await axios.get(
			`http://localhost:8081/api/${this.songID}`
		);
		if (res.status === HttpStatusCode.Ok) {
			this.song = res.data;
			this.isSongFetched = true;
		}
	}
}
</script>
