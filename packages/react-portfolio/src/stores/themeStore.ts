import { create } from 'zustand';
import { prefersDarkMode } from '@portfolio/shared';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: true,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setTheme: (dark) => set({ isDark: dark }),
}));
