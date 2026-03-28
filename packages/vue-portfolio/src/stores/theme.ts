import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { prefersDarkMode } from '@portfolio/shared';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(localStorage.getItem('theme') === 'dark' || prefersDarkMode());

  function toggleTheme() {
    isDark.value = !isDark.value;
  }

  function setTheme(dark: boolean) {
    isDark.value = dark;
  }

  // Watch for changes and update localStorage + DOM
  watch(
    isDark,
    (newValue) => {
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    { immediate: true },
  );

  return { isDark, toggleTheme, setTheme };
});
