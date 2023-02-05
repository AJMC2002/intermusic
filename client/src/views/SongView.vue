<template>
	<LoadingSpinner v-if="!store.songs.length || !song"></LoadingSpinner>
	<div v-else>
		<SongHeader :song="song"></SongHeader>
		<SongLyrics :lyrics="song?.lyrics"></SongLyrics>
	</div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import SongHeader from "@/components/SongHeader.vue";
import SongLyrics from "@/components/SongLyrics.vue";
import { useSongStore } from "@/stores/song";
import { Song } from "@/types";

const route = useRoute();
const store = useSongStore();

const id = typeof route.params.id === "string" ? parseInt(route.params.id) : 0;
const song = computed(() => store.songs.find((song: Song) => song.id === id));

onBeforeMount(() => {
	if (!store.songs.length) {
		store.updateSongs();
	}
});
</script>
