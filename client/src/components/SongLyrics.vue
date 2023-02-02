<template>
	<div class="px-14 py-6">
		<span class="whitespace-pre">
			{{ lyrics }}
		</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ lyrics: String });
</script>
