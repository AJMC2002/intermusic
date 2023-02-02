<template>
	<div class="relative w-screen flex flex-row px-14 py-3 gap-5">
		<img src="@/assets/cat.jpg" alt="" class="w-32 h-32" />
		<div
			class="absolute -z-10 top-0 left-0 w-full h-3/4 pl-52 pr-14 py-3 bg-black"
		>
			<div class="flex-col align-top items-center align-center">
				<h1>song.title</h1>
				<h2>song.artist.name</h2>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	song: {
		type: Object,
		required: true,
	},
});
</script>
