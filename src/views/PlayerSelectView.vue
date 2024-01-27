<script setup>
import { usePlayers } from '@/stores/player';
import Button from '@/components/Button.vue';
import { ref } from 'vue';

const playerStore = usePlayers();

const nameInput = ref('');

function add() {
    playerStore.addPlayer(nameInput.value);
    nameInput.value = '';
}

function remove(player) {
    playerStore.removePlayer(player);
}

</script>


<template>
    <div class="container mx-auto p-2 text-center md:max-w-md">

        <div class="player-select min-w-min">
            <h1 class="text-4xl font-bold">Who is playing?</h1>
            <p class="flex-row space-x-2 space-y-2 py-2">
            <div v-for="player in playerStore.players" :key="player"
                class="inline-block py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded-lg cursor-pointer select-none"
                @click="remove(player)">
                <span>{{ player }}</span>
            </div>
            </p>
            <div class="flex flex-row">
                <input v-model="nameInput"
                    class="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    @keypress.enter="add">
                <Button class="ml-2" @click="add">Add</Button>
            </div>
            <Button class="w-full mt-2" @click="$router.push({ name: 'pack-select' })">Next</Button>
        </div>
</div></template>
