<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { personalInfo } from '@portfolio/shared';

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ currentYear }} {{ personalInfo.name }}. {{ t('footer.rights') }}.
          </p>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>{{ t('footer.madeWith') }}</span>
          <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Vue + Vite</span>
        </div>
      </div>
    </div>
  </footer>
</template>
