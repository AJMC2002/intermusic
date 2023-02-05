<template>
	<div id="lyrics-bg">
		<span class="whitespace-pre">
			{{ lyrics }}
		</span>
	</div>
</template>

<script setup lang="ts">
interface Props {
	lyrics: string;
}

defineProps<Props>();
</script>
