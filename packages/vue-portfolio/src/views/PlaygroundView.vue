<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { cn } from '@portfolio/shared';
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

// ── Inputs ─────────────────────────────────────────────────────────────────────
const showPassword = ref(false);

// ── Alerts ─────────────────────────────────────────────────────────────────────
type AlertType = 'success' | 'error' | 'info' | 'warning';
const alerts = ref<AlertType[]>(['success', 'error', 'info', 'warning']);
const dismissAlert = (type: AlertType) => {
  alerts.value = alerts.value.filter((a) => a !== type);
};
const resetAlerts = () => {
  alerts.value = ['success', 'error', 'info', 'warning'];
};

const alertConfig: Record<AlertType, { border: string; bg: string; text: string; icon: string }> = {
  success: { border: 'border-green-400',  bg: 'bg-green-50 dark:bg-green-900/20',   text: 'text-green-800 dark:text-green-300',   icon: '✓' },
  error:   { border: 'border-red-400',    bg: 'bg-red-50 dark:bg-red-900/20',       text: 'text-red-800 dark:text-red-300',       icon: '✕' },
  info:    { border: 'border-blue-400',   bg: 'bg-blue-50 dark:bg-blue-900/20',     text: 'text-blue-800 dark:text-blue-300',     icon: 'i' },
  warning: { border: 'border-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-900/20', text: 'text-yellow-800 dark:text-yellow-300', icon: '!' },
};
const alertMessages: Record<AlertType, { title: string; message: string }> = {
  success: { title: 'Success!',  message: 'Your changes have been saved successfully.' },
  error:   { title: 'Error',     message: 'Something went wrong. Please try again.' },
  info:    { title: 'Info',      message: 'A new software update is available.' },
  warning: { title: 'Warning',   message: 'Your session will expire in 5 minutes.' },
};

// ── Cards ──────────────────────────────────────────────────────────────────────
const liked = ref(false);

// ── Modals ─────────────────────────────────────────────────────────────────────
const modalOpen = ref(false);
const confirmOpen = ref(false);

// ── Progress ───────────────────────────────────────────────────────────────────
const progressValues = [30, 60, 85];
</script>

<template>
  <div class="min-h-screen pt-24 pb-12">
    <!-- Modals -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="modalOpen || confirmOpen" class="fixed inset-0 bg-black/50 z-40" @click="modalOpen = false; confirmOpen = false" />
      </Transition>
      <Transition name="scale">
        <div v-if="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="bg-white dark:bg-dark-800 rounded-xl shadow-xl w-full max-w-md">
            <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-600">
              <h3 class="text-lg font-semibold">Example Modal</h3>
              <button @click="modalOpen = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">✕</button>
            </div>
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-400 mb-6">This is a modal dialog with smooth animations. You can put any content here — forms, images, confirmations.</p>
              <div class="flex gap-3 justify-end">
                <BaseButton variant="ghost" @click="modalOpen = false">Cancel</BaseButton>
                <BaseButton @click="modalOpen = false">Confirm</BaseButton>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="scale">
        <div v-if="confirmOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="bg-white dark:bg-dark-800 rounded-xl shadow-xl w-full max-w-md">
            <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-600">
              <h3 class="text-lg font-semibold">Delete item?</h3>
              <button @click="confirmOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-400 mb-6">This action cannot be undone. Are you sure you want to delete this item permanently?</p>
              <div class="flex gap-3 justify-end">
                <BaseButton variant="ghost" @click="confirmOpen = false">Cancel</BaseButton>
                <BaseButton variant="danger" @click="confirmOpen = false">Delete</BaseButton>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">{{ t('playground.title') }}</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">{{ t('playground.subtitle') }}</p>
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

        <!-- Buttons -->
        <div v-if="activeTab === 'buttons'" class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Variants</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton variant="primary">Primary</BaseButton>
              <BaseButton variant="secondary">Secondary</BaseButton>
              <BaseButton variant="ghost">Ghost</BaseButton>
              <BaseButton variant="danger">Danger</BaseButton>
              <BaseButton variant="success">Success</BaseButton>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Sizes</h3>
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton size="xs">Extra Small</BaseButton>
              <BaseButton size="sm">Small</BaseButton>
              <BaseButton size="md">Medium</BaseButton>
              <BaseButton size="lg">Large</BaseButton>
              <BaseButton size="xl">Extra Large</BaseButton>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">States</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton :is-loading="true">Loading</BaseButton>
              <BaseButton :disabled="true">Disabled</BaseButton>
              <BaseButton :full-width="true">Full Width</BaseButton>
            </div>
          </div>
        </div>

        <!-- Inputs -->
        <div v-if="activeTab === 'inputs'" class="space-y-8 max-w-md">
          <div>
            <h3 class="text-xl font-semibold mb-4">Basic</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                  <input type="text" placeholder="Bruno Xavier" class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉</span>
                  <input type="email" placeholder="brunovx6@gmail.com" class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Search</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                  <input type="text" placeholder="Search..." class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Password</h3>
            <div>
              <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                <input :type="showPassword ? 'text' : 'password'" placeholder="••••••••" class="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" />
                <button @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {{ showPassword ? '🙈' : '👁' }}
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Validation</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Valid email</label>
                <input value="bruno@email.com" class="w-full px-4 py-2.5 rounded-lg border border-green-500 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Invalid email</label>
                <input value="not-an-email" class="w-full px-4 py-2.5 rounded-lg border border-red-500 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors" />
                <p class="mt-1 text-xs text-red-500">Please enter a valid email address.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Textarea</h3>
            <div>
              <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
              <textarea rows="4" placeholder="Write your message..." class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none" />
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div v-if="activeTab === 'cards'" class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Profile Card</h3>
            <div class="glass rounded-xl overflow-hidden w-64 card-hover">
              <div class="h-24 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <div class="px-5 pb-5">
                <div class="w-16 h-16 rounded-full bg-gray-300 dark:bg-dark-600 border-4 border-white dark:border-dark-800 -mt-8 mb-3 flex items-center justify-center text-2xl">👤</div>
                <h4 class="font-semibold">Bruno Xavier</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Front-end Developer</p>
                <div class="flex gap-2">
                  <BaseButton size="sm" :full-width="true">Follow</BaseButton>
                  <button
                    @click="liked = !liked"
                    :class="cn('p-2 rounded-lg border transition-colors', liked ? 'text-red-500 border-red-300' : 'border-gray-300 dark:border-dark-600')"
                  >❤</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Stats / Repo Card</h3>
            <div class="glass rounded-xl p-5 w-64 card-hover space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="font-semibold">Repository</h4>
                <span class="text-gray-400">⌨</span>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400">A full-stack warehouse management system with Docker and PostgreSQL.</p>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span>⭐ 12</span>
                <span>❤ 5</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" /> JavaScript</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Pricing Cards</h3>
            <div class="flex flex-wrap gap-4 items-start">
              <div class="glass rounded-xl p-6 w-56 space-y-4 card-hover">
                <p class="text-sm font-medium opacity-75">Free</p>
                <p class="text-3xl font-bold">$0<span class="text-sm font-normal opacity-75">/mo</span></p>
                <ul class="space-y-2 text-sm">
                  <li v-for="f in ['5 projects', 'Basic analytics', 'Community support']" :key="f" class="flex items-center gap-2">✓ {{ f }}</li>
                </ul>
                <BaseButton size="sm" :full-width="true">Get Started</BaseButton>
              </div>
              <div class="rounded-xl p-6 w-56 space-y-4 bg-primary-600 text-white">
                <p class="text-sm font-medium opacity-75">Pro</p>
                <p class="text-3xl font-bold">$12<span class="text-sm font-normal opacity-75">/mo</span></p>
                <ul class="space-y-2 text-sm">
                  <li v-for="f in ['Everything in Free', 'Unlimited projects', 'Priority support', 'Custom domain']" :key="f" class="flex items-center gap-2">✓ {{ f }}</li>
                </ul>
                <button class="w-full py-1.5 px-3 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modals -->
        <div v-if="activeTab === 'modals'" class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Modal Examples</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton @click="modalOpen = true">Open Modal</BaseButton>
              <BaseButton variant="danger" @click="confirmOpen = true">Confirm Delete</BaseButton>
            </div>
          </div>
          <div class="glass rounded-xl p-6 max-w-md opacity-70 pointer-events-none">
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-semibold">Preview</h4>
              <span class="text-gray-400">✕</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Modal content goes here. Click the buttons above to see live modals with backdrop and animations.</p>
            <div class="flex gap-3 justify-end">
              <BaseButton variant="ghost" size="sm">Cancel</BaseButton>
              <BaseButton size="sm">Confirm</BaseButton>
            </div>
          </div>
        </div>

        <!-- Loaders -->
        <div v-if="activeTab === 'loaders'" class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Spinners</h3>
            <div class="flex flex-wrap items-center gap-8">
              <div v-for="(cfg, i) in [{size:'w-5 h-5', color:'#6366f1'},{size:'w-8 h-8', color:'#6366f1'},{size:'w-12 h-12', color:'#6366f1'},{size:'w-8 h-8', color:'#10b981'},{size:'w-8 h-8', color:'#f59e0b'}]" :key="i"
                class="border-4 border-gray-200 rounded-full animate-spin"
                :class="cfg.size"
                :style="`border-top-color: ${cfg.color}`"
              />
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Pulse Dots</h3>
            <div class="flex gap-1.5">
              <div v-for="i in 3" :key="i" class="w-3 h-3 bg-primary-500 rounded-full animate-bounce" :style="`animation-delay: ${(i-1) * 0.15}s`" />
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Skeleton</h3>
            <div class="glass rounded-xl p-4 space-y-3 w-64">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-300 dark:bg-dark-600 animate-pulse" />
                <div class="flex-1 space-y-1.5">
                  <div class="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse w-3/4" />
                  <div class="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse w-1/2" />
                </div>
              </div>
              <div class="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse" />
              <div class="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse w-5/6" />
              <div class="h-8 bg-gray-300 dark:bg-dark-600 rounded animate-pulse mt-2" />
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Progress Bar</h3>
            <div class="space-y-3 max-w-sm">
              <div v-for="val in progressValues" :key="val">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-600 dark:text-gray-400">Progress</span>
                  <span class="font-medium">{{ val }}%</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-500 rounded-full transition-all duration-1000" :style="`width: ${val}%`" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Alerts -->
        <div v-if="activeTab === 'alerts'" class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Alert Types</h3>
            <div class="space-y-3 max-w-lg">
              <TransitionGroup name="alert">
                <div
                  v-for="type in alerts"
                  :key="type"
                  :class="cn('flex items-start gap-3 p-4 rounded-lg border-l-4', alertConfig[type].bg, alertConfig[type].border)"
                >
                  <span :class="cn('font-bold text-sm mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center rounded-full border-2', alertConfig[type].text, alertConfig[type].border)">
                    {{ alertConfig[type].icon }}
                  </span>
                  <div class="flex-1">
                    <p :class="cn('font-semibold text-sm', alertConfig[type].text)">{{ alertMessages[type].title }}</p>
                    <p :class="cn('text-sm mt-0.5 opacity-80', alertConfig[type].text)">{{ alertMessages[type].message }}</p>
                  </div>
                  <button @click="dismissAlert(type)" :class="cn('shrink-0 opacity-60 hover:opacity-100', alertConfig[type].text)">✕</button>
                </div>
              </TransitionGroup>
              <div v-if="alerts.length === 0" class="text-center py-8">
                <p class="text-gray-500 mb-4">All alerts dismissed.</p>
                <BaseButton @click="resetAlerts">Reset Alerts</BaseButton>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Without Close</h3>
            <div class="max-w-lg">
              <div :class="cn('flex items-start gap-3 p-4 rounded-lg border-l-4', alertConfig.info.bg, alertConfig.info.border)">
                <span :class="cn('font-bold text-sm shrink-0', alertConfig.info.text)">i</span>
                <div>
                  <p :class="cn('font-semibold text-sm', alertConfig.info.text)">Read only</p>
                  <p :class="cn('text-sm mt-0.5 opacity-80', alertConfig.info.text)">This alert cannot be dismissed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scale-enter-active, .scale-leave-active { transition: all 0.2s; }
.scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.95); }

.alert-enter-active, .alert-leave-active { transition: all 0.3s; }
.alert-enter-from, .alert-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
