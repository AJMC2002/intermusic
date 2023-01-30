<template>
	<div class="font-mono text-l px-14">
		<SongCard v-for="idx in ids" :key="idx" :songID="idx"></SongCard>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar.vue";
import SongCard from "@/components/SongCard.vue";

@Options({
	components: {
		NavBar,
		SongCard,
	},
})
export default class HomeView extends Vue {
	ids = [796266, 795987, 796152, 796286, 796354, 795963];
}
</script>
