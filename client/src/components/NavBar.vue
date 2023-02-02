<template>
	<nav class="navbar">
		<router-link to="/" class="title">MеждуMusic</router-link>
		<router-link to="/song/796266" class="title">Pitooo</router-link>
		<div class="searchbar group">
			<font-awesome-icon
				icon="xmark"
				class="clear-input-btn"
				@click="delSearch"
			/>
			<input
				type="text"
				maxlength="100"
				placeholder="Enter your search here"
				@keydown.enter="onSubmit"
				v-model="search"
			/>
			<img
				src="../assets/cat.jpg"
				alt=""
				@click="onSubmit"
				class="submit-input-btn"
			/>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const search = ref("pene");

function delSearch(): void {
	search.value = "";
}
function onSubmit(): void {
	console.log(search);
}
</script>
