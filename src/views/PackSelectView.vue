<script setup>
import { usePacks } from '@/stores/packs';
import Button from '@/components/Button.vue';

const packStore = usePacks();

function change(name, state) {
  if (state) packStore.enable(name);
  else packStore.disable(name);
}

</script>


<template>
  <div class="container mx-auto p-2 text-center md:max-w-md">
    
    <div class="player-select min-w-min">
      <h1 class="text-4xl font-bold">What packs?</h1>
      <div class="flex flex-col space-y-2 py-2">
        <div v-for="pack in packStore.packs" :key="pack.id" class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input @change="e => change(pack.id, e.target.checked)" :id="pack.name" type="checkbox" :checked="pack.enabled" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label :for="pack.name" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {{ pack.name }}
          </label>
        </div>
      </div>
    </div>

    <Button class="w-full mt-2" @click="$router.push({ name: 'player' })">Start</Button>
  </div>
</template>