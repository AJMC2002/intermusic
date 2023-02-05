<template>
	<nav>
		<router-link to="/">
			<div id="logo">
				<img src="@/assets/images/Luna.gif" alt="" class="h-16 -scale-x-100" />
				MеждуMusic
			</div>
		</router-link>
		<div id="searchbar" class="group">
			<font-awesome-icon id="clear-input-btn" icon="xmark" @click="delSearch" />
			<input
				type="text"
				maxlength="100"
				v-model="search"
				placeholder="Введите поиск здесь"
				@keyup.enter="onSubmit"
			/>
			<img
				id="submit-input-btn"
				src="@/assets/images/cat.jpg"
				alt=""
				@click="onSubmit"
			/>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useEventBus from "@/eventBus";

const router = useRouter();
const { emit } = useEventBus();

const search = ref("");

function delSearch(): void {
	search.value = "";
	onSubmit();
}

function onSubmit(): void {
	search.value = search.value.trim();
	emit("search", search.value.toLocaleLowerCase());

	if (router.currentRoute.value.path !== "/") {
		router.push({ path: "/" });
	}
}
</script>
