<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SideMenu from '@/components/SideMenu.vue';
import NavMenu from '@/components/NavMenu.vue';
import Footer from '@/components/Footer.vue';
import { useSideMenuMy } from './stores/counter';

const side = useSideMenuMy();
</script>

<template>
  <NavMenu />
  <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
    <SideMenu />

    <div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>

    <div id="main-content" :class="side.side ? '' : 'lg:ml-64'" class="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <main>
        <div class="px-4 pt-6">
          <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
            <router-view></router-view>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
