<template>
	<div id="song-card-bg">
		<div @click="redirect" id="song-card">
			<img :src="song.image_url" alt="" class="w-32 h-32" />
			<div>
				<h1>{{ song.name }}</h1>
				<h2>{{ song.artist.name }}</h2>
				<h3 v-if="song.featured_artists.length">
					{{ `Ft. ${featuredArtists()}` }}
				</h3>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Artist, Song } from "@/types";

interface Props {
	song: Song;
}

const props = defineProps<Props>();

const router = useRouter();

function featuredArtists(): string {
	const artist_names: string[] = props.song.featured_artists.map(
		(artist: Artist) => artist.name
	);
	const start: string = artist_names.slice(0, -1).join(", ");
	const end: string[] = artist_names.slice(-1);
	return [start, end].join(artist_names.length <= 1 ? "" : " & ");
}
function redirect(): void {
	router.push({
		path: `/song/${props.song.id}`,
	});
}
</script>
