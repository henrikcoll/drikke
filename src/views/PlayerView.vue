<script setup>
import { useDeck } from '@/stores/deck';
import { usePacks } from '@/stores/packs';
import Button from '@/components/Button.vue';
import { ref } from 'vue';

const showMenu = ref(false);

const deck = useDeck();
const packs = usePacks();

function setup() {
  deck.reset();
  deck.loadPacks(packs.enabled.map(p => p.id));
}
setup();

</script>

<template>
  <div v-if="deck.cardCounter < deck.cards.length" class="w-screen h-screen flex items-center justify-center" @click="deck.next">
    <div>
      <h1 class="text-8xl font-bold text-center">{{ deck.current }}</h1>
    </div>
  </div>
  <div v-else class="w-screen h-screen flex items-center justify-center">
  <div>
      <h1 class="text-8xl font-bold">Game Over!</h1>
      <div class="text-center py-3 flex flex-row space-x-2 justify-center">
        <Button @click="$router.push({ name: 'pack-select' })">Change packs</Button>
        <Button @click="$router.push({ name: 'player-select' })">New game</Button>
        <Button @click="setup()">Restart</Button>
      </div>
    </div>
  </div>
  <div class="z-20 absolute top-0 left-0" :class="{'w-screen h-screen': showMenu}" @click.self="showMenu = false">
    <button @click="() => showMenu = !showMenu" class="inline-flex items-center justify-center rounded-md bg-gray-800 m-2 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
      <svg :class="{'hidden': showMenu}" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <svg :class="{'hidden': !showMenu}" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div v-if="showMenu">
      <div class="w-min whitespace-nowrap mx-2" @click="showMenu = false">
        <div class="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
        <button @click="$router.push({ name: 'pack-select' })" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Change packs</button>
        <button @click="$router.push({ name: 'player-select' })" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">New game</button>
        <button @click="setup()" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Restart</button>
        <button @click="deck.cardCounter > 0 ? deck.cardCounter-- : 0" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Go Back</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>@/stores/deck