

<template>
	<div class="home">
		<Button @click="$router.push({ name: 'player-select' })">Start Game</Button>
	</div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
	components: {
		Button
	}
};
</script>
