<template>
	<div id="lyrics-bg">
		<span class="whitespace-pre">
			{{ lyrics }}
		</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ lyrics: String });
</script>
