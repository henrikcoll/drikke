<script setup>
import Button from "@/components/Button.vue";

</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center text-center">
    <div class="">
      <h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold">Welcome to drikke.org</h1>
	  <p class="text-gray-400 text-xl">Up ahead there is alot of nsfw content and some sfw. Also, drink responsibly.</p>
	  <div>
		  <Button class="w mt-2 text-2xl" @click="$router.push({ name: 'player-select' })">Ok</Button>
	  </div>
    </div>
  </div>
</template>
