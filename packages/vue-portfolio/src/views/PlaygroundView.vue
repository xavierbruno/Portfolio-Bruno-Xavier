<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseButton from '@/components/ui/BaseButton.vue';

const { t } = useI18n();
const activeTab = ref('buttons');

const components = [
  { id: 'buttons', label: 'playground.components.buttons' },
  { id: 'inputs', label: 'playground.components.inputs' },
  { id: 'cards', label: 'playground.components.cards' },
  { id: 'modals', label: 'playground.components.modals' },
  { id: 'loaders', label: 'playground.components.loaders' },
  { id: 'alerts', label: 'playground.components.alerts' },
];
</script>

<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          {{ t('playground.title') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ t('playground.subtitle') }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2 justify-center mb-8">
        <BaseButton
          v-for="component in components"
          :key="component.id"
          :variant="activeTab === component.id ? 'primary' : 'ghost'"
          @click="activeTab = component.id"
        >
          {{ t(component.label) }}
        </BaseButton>
      </div>

      <div class="glass rounded-xl p-8">
        <!-- Button Examples -->
        <div v-if="activeTab === 'buttons'" class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Button Variants</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton variant="primary">Primary</BaseButton>
              <BaseButton variant="secondary">Secondary</BaseButton>
              <BaseButton variant="ghost">Ghost</BaseButton>
              <BaseButton variant="danger">Danger</BaseButton>
              <BaseButton variant="success">Success</BaseButton>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Button Sizes</h3>
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton size="xs">Extra Small</BaseButton>
              <BaseButton size="sm">Small</BaseButton>
              <BaseButton size="md">Medium</BaseButton>
              <BaseButton size="lg">Large</BaseButton>
              <BaseButton size="xl">Extra Large</BaseButton>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Button States</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton :is-loading="true">Loading</BaseButton>
              <BaseButton :disabled="true">Disabled</BaseButton>
              <BaseButton :full-width="true">Full Width</BaseButton>
            </div>
          </div>
        </div>

        <!-- Other component examples would go here -->
      </div>
    </div>
  </div>
</template>
