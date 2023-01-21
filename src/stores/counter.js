import { defineStore } from 'pinia';

export const useSideMenuMy = defineStore('useSideMenuMy', {
  state: () => {
    return { side: false };
  },
  actions: {
    update() {
      this.side = !this.side;
    },
  },
});
