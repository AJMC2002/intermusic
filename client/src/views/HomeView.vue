<template>
	<LoadingSpinner v-if="!store.songs.length"></LoadingSpinner>
	<div v-else id="home">
		<h1 v-if="!validSongs.length" class="text-black">Hvdas no disponibles</h1>
		<SongCard
			v-else
			v-for="song in validSongs"
			:key="song.id"
			:song="song"
		></SongCard>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount, watch } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import SongCard from "@/components/SongCard.vue";
import { useSongStore } from "@/stores/song";
import useEventBus from "@/eventBus";
import { Artist, Song } from "@/types";

const { bus } = useEventBus();
const store = useSongStore();
const search = ref(bus.value.get("search") ?? "");

const validSongs = computed<Song[]>(() => {
	if (search.value) {
		return store.songs.filter((song: Song) =>
			[
				song.name,
				song.artist.name,
				...song.featured_artists.map((artist: Artist) => artist.name),
				song.album?.name,
				song.lyrics,
			].some((val: string | undefined) =>
				Boolean(val?.toLocaleLowerCase().includes(search.value))
			)
		);
	}
	return store.songs;
});

watch(
	() => bus.value.get("search"),
	(val) => (search.value = val ?? "")
);

onBeforeMount(() => {
	if (!store.songs.length) {
		store.updateSongs();
	}
});
</script>
