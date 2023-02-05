<template>
	<div id="song-info">
		<h1>О песне</h1>
		<hr />
		<div class="info-section">
			<div class="info-subsection">
				<img :src="song.artist.image_url" alt="" class="w-52 h-52" />
			</div>
			<div class="info-subsection">
				<a :href="song.artist.genius_url" class="text-2xl italic">{{ song.artist.name }}</a>
			</div>
		</div>
		<hr v-if="song.album" />
		<div v-if="song.album" class="info-section">
			<div class="info-subsection">
				<img :src="song.album.image_url" alt="" class="w-52 h-52" />
			</div>
			<div class="info-subsection">
				<a :href="song.album.genius_url" class="text-2xl italic">{{ song.album.name }}</a>
			</div>
		</div>
		<hr v-if="song.youtube_url" />
		<iframe
			v-if="song.youtube_url"
			width="560"
			height="315"
			:src="youtube_link"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
		></iframe>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Song } from "@/types";

interface Props {
	song: Song;
}

const props = defineProps<Props>();

const youtube_link = computed(() => {	
	const videoID = props.song.youtube_url?.split("=")[1];
	return `https://youtube.com/embed/${videoID}`;
});
</script>
