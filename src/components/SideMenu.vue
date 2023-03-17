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
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-home bx-sm mr-2"></i>

                Home</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bxl-discord-alt bx-sm mr-2"></i>
                Discord Role</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-list-ol bx-sm mr-2"></i>
                Rarity</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-refresh bx-sm mr-2"></i>
                Dex</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-coin bx-sm mr-2"></i>
                Flip A Coin</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-store bx-sm mr-2"></i>
                Market</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-wallet-alt bx-sm mr-2"></i>
                My NFT</router-link
              >
            </li>
          </ul>
          <div class="divider"></div>
          <ul class="pb-2 space-y-2">
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-calendar bx-sm mr-2"></i>
                Season</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <i class="bx bx-coin-stack bx-sm mr-2"></i>

                Stake</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>
