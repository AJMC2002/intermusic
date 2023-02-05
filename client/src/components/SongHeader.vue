<template>
	<div id="song-header">
		<img :src="song.image_url" alt="" class="w-56 h-56 shadow-lg" />
		<div id="song-header-info">
			<div class="flex-col align-top items-center align-center">
				<h1>{{ song.name }}</h1>
				<h2>{{ song.artist.name }}</h2>
				<h3 v-if="song.featured_artists.length">Ft. {{ featured_artists }}</h3>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Artist, Song } from "@/types";
import { computed } from "vue";

interface Props {
	song: Song;
}

const props = defineProps<Props>();

const featured_artists = computed(() => {
	const artist_names: string[] = props.song.featured_artists.map(
		(artist: Artist) => {
			return artist.name;
		}
	);
	const start: string = artist_names.slice(0, -1).join(", ");
	const end: string[] = artist_names.slice(-1);
	return [start, end].join(artist_names.length <= 1 ? "" : " & ");
});
</script>
