<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '@/stores/theme';
import BaseButton from './ui/BaseButton.vue';
import IconMenu from './icons/IconMenu.vue';
import IconX from './icons/IconX.vue';
import IconSun from './icons/IconSun.vue';
import IconMoon from './icons/IconMoon.vue';
import IconGlobe from './icons/IconGlobe.vue';

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const themeStore = useThemeStore();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isLangMenuOpen = ref(false);

const navItems = computed(() => [
  { path: '/#hero', label: t('nav.home') },
  { path: '/#about', label: t('nav.about') },
  { path: '/#projects', label: t('nav.projects') },
  { path: '/#experience', label: t('nav.experience') },
  { path: '/#skills', label: t('nav.skills') },
  { path: '/#blog', label: t('nav.blog') },
  { path: '/#contact', label: t('nav.contact') },
  { path: '/playground', label: t('nav.playground') },
]);

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
];

const headerClass = computed(() => {
  return isScrolled.value ? 'glass py-4' : 'bg-transparent py-6';
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const handleNavClick = (path: string) => {
  if (path.startsWith('/#')) {
    const elementId = path.substring(2);
    if (route.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    } else {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }
  isMobileMenuOpen.value = false;
};

const changeLanguage = (code: string) => {
  locale.value = code;
  isLangMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', headerClass]">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-2xl font-bold gradient-text"
          @click="handleNavClick('/#hero')"
        >
          BX
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="handleNavClick(item.path)"
            :class="[
              'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
              route.path === item.path && 'text-primary-600 dark:text-primary-400',
            ]"
          >
            {{ item.label }}
          </router-link>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <!-- Language Selector -->
          <div class="relative">
            <BaseButton
              variant="ghost"
              size="sm"
              @click="isLangMenuOpen = !isLangMenuOpen"
              class="p-2"
            >
              <IconGlobe class="w-5 h-5" />
            </BaseButton>
            <Transition name="dropdown">
              <div
                v-if="isLangMenuOpen"
                class="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-dark-800 rounded-lg shadow-xl"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  :class="[
                    'block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-700',
                    locale === lang.code && 'bg-gray-100 dark:bg-dark-700',
                  ]"
                >
                  {{ lang.name }}
                </button>
              </div>
            </Transition>
          </div>

          <!-- Theme Toggle -->
          <BaseButton variant="ghost" size="sm" @click="themeStore.toggleTheme" class="p-2">
            <IconSun v-if="themeStore.isDark" class="w-5 h-5" />
            <IconMoon v-else class="w-5 h-5" />
          </BaseButton>

          <!-- Mobile Menu Toggle -->
          <BaseButton
            variant="ghost"
            size="sm"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 lg:hidden"
          >
            <IconX v-if="isMobileMenuOpen" class="w-5 h-5" />
            <IconMenu v-else class="w-5 h-5" />
          </BaseButton>
        </div>
      </nav>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="lg:hidden pt-4 pb-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="handleNavClick(item.path)"
            class="block py-2 text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400"
          >
            {{ item.label }}
          </router-link>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  height: 0;
}
</style>
