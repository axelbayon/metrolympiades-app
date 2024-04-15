import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    darkMode: true,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});