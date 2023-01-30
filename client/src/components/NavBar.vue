<template>
	<nav class="navbar">
		<router-link to="/" class="title">MеждуMusic</router-link>
		<router-link to="/about" class="title">Pitooo</router-link>
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

<script lang="ts">
import { Vue } from "vue-class-component";

export default class NavBar extends Vue {
	search = "pene";
	delSearch(): void {
		this.search = "";
	}
	onSubmit(): void {
		console.log(this.search);
	}
}
</script>
