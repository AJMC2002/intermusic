<template>
	<div class="font-mono text-l px-14">
		<LoadingSpinner v-if="isLoading"></LoadingSpinner>
		<SongCard
			v-else
			v-for="song in validSongs"
			:key="song.id"
			:song="song"
		></SongCard>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import LoadingSpinner from "../../../client/src/components/LoadingSpinner.vue";
import SongCard from "../../../client/src/components/SongCard.vue";
import { useSongStore } from "../stores/song";
import { Song } from "../../../client/src/types.js";

const store = useSongStore();
const isLoading = ref(true);
const search = ref("");

const validSongs = computed<Song[]>(() => {
	if (search.value) {
		return store.songs.filter((song: Song) => song.name.includes(search.value));
	}
	return store.songs;
});

onBeforeMount(() => {
	store.updateSongs();
	isLoading.value = false;
});
</script>
