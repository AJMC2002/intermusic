<template>
	<div
		class="relative my-6 rounded-lg bg-black text-white before:-z-10 before:w-full before:h-full before:absolute before:top-3 before:left-3 before:rounded-lg before:bg-slate-600"
	>
		<div @click="redirect" class="p-5 gap-5 flex flex-row items-center">
			<img :src="song.image_url" alt="" class="w-32 h-32" />
			<div>
				<h1>{{ song.name }}</h1>
				<h3>{{ song.artist.name }}</h3>
				<h3 v-if="song.featured_artists.length > 0">
					{{ `Ft. ${featuredArtists()}` }}
				</h3>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Artist } from "@/types";
import { useRouter } from "vue-router";

const props = defineProps({
	song: {
		type: Object,
		required: true,
	},
});

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
