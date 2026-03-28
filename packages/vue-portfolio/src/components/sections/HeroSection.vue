<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { personalInfo } from '@portfolio/shared';
import BaseButton from '@/components/ui/BaseButton.vue';

const { t } = useI18n();

const scrollToProjects = () => {
  const element = document.getElementById('projects');
  element?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
      />
      <div
        class="absolute top-40 right-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      />
      <div
        class="absolute -bottom-20 left-1/2 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      />
    </div>

    <div class="container mx-auto px-4 py-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="500"
        class="text-center max-w-4xl mx-auto"
      >
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {{ t('hero.greeting') }}
        </p>

        <h1 class="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          {{ personalInfo.name }}
        </h1>

        <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          {{ t('hero.role') }}
        </p>

        <p class="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {{ personalInfo.shortBio }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <BaseButton size="lg" @click="scrollToProjects">
            {{ t('hero.cta.primary') }}
          </BaseButton>
          <BaseButton variant="secondary" size="lg">
            {{ t('hero.cta.secondary') }}
          </BaseButton>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4 justify-center">
          <a
            v-for="(url, platform) in personalInfo.social"
            :key="platform"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-gray-100 dark:bg-dark-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            <span class="sr-only">{{ platform }}</span>
            <!-- Icons would be here -->
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
