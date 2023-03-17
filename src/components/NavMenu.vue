<script setup>
import { useSideMenuMy } from '../stores/counter';
import Web3Button from '../components/Web3Button.vue';

import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const side = useSideMenuMy();
const toggleDark = useToggle(isDark);
</script>
<template>
  <nav class="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button @click="side.update()" id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="">
            <i class="bx bx-toggle-left bx-lg transition duration-300" v-if="side.side"></i>
            <i class="bx bx-toggle-right bx-lg text-green-300 transition duration-300" v-else></i>
          </button>
          <a href="https://vitruvians.tools/" class="flex ml-2 md:mr-24">
            <img src="https://vitruvians.tools/logo/Analogo-koyuzeminde.png" class="h-8 mr-3" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Vitruvians</span>
          </a>
        </div>
        <div class="flex items-center">
          <button @click="toggleDark()" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <i class="bx bxs-sun" v-if="isDark"></i>
            <i class="bx bxs-moon" v-else></i>
          </button>
          <Web3Button></Web3Button>
        </div>
      </div>
    </div>
  </nav>
</template>
