<template>
	<NavBar></NavBar>
	<router-view />
	<PageFooter></PageFooter>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>
