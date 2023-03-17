<script setup>
import { useSideMenuMy } from '../stores/counter';

const side = useSideMenuMy();
</script>

<template>
  <aside id="sidebar" class="absolute z-20 flex flex-col flex-shrink-0 w-64 h-full font-normal duration-75 transition-width" :class="side.side ? 'hidden' : ''" aria-label="Sidebar">
    <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 space-y-1 bg-white dark:bg-gray-800 dark:divide-gray-700">
          <ul class="pb-2 space-y-2">
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Discord Role</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Rarity</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Dex</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Flip A Coin</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Market</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">My NFT</router-link>
            </li>
          </ul>
          <div class="divider"></div>
          <ul class="pb-2 space-y-2">
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Season</router-link>
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">Stake</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>
