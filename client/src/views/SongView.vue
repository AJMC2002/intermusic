<template>
	<SongHeader :song="song || {}"></SongHeader>
	<SongLyrics :lyrics="song?.lyrics"></SongLyrics>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import SongHeader from "../../../client/src/components/SongHeader.vue";
import SongLyrics from "@/components/SongLyrics.vue";
import { useSongStore } from "../stores/song";
import { Artist, Song } from "@/types";

const route = useRoute();
const store = useSongStore();

const id = parseInt(
	typeof route.params.id === "string" ? route.params.id : "0",
	10
);
const song = computed(() => store.songs.find((song: Song) => song.id === id));
const featured_artists = computed(() => {
	if (song.value) {
		const artist_names: string[] = song.value.featured_artists.map(
			(artist: Artist) => {
				return artist.name;
			}
		);
		const start: string = artist_names.slice(0, -1).join(", ");
		const end: string[] = artist_names.slice(-1);
		return [start, end].join(artist_names.length <= 1 ? "" : " & ");
	}
	return null;
});

onBeforeMount(() => store.updateSongs());
</script>
