import { useEffect, useRef } from 'react';
import { createApp, defineComponent, ref, computed } from 'vue';
import { cn } from '@portfolio/shared';

// ── Vue Playground App ────────────────────────────────────────────────────────
const VuePlaygroundApp = defineComponent({
  setup() {
    const activeTab = ref('buttons');
    const showPassword = ref(false);
    const liked = ref(false);
    const modalOpen = ref(false);
    const confirmOpen = ref(false);

    type AlertType = 'success' | 'error' | 'info' | 'warning';
    const alerts = ref<AlertType[]>(['success', 'error', 'info', 'warning']);
    const dismissAlert = (type: AlertType) => {
      alerts.value = alerts.value.filter((a) => a !== type);
    };
    const resetAlerts = () => {
      alerts.value = ['success', 'error', 'info', 'warning'];
    };

    const alertConfig: Record<AlertType, { border: string; bg: string; text: string; icon: string }> = {
      success: { border: 'border-green-400', bg: 'bg-green-50', text: 'text-green-800', icon: '✓' },
      error:   { border: 'border-red-400',   bg: 'bg-red-50',   text: 'text-red-800',   icon: '✕' },
      info:    { border: 'border-blue-400',  bg: 'bg-blue-50',  text: 'text-blue-800',  icon: 'i' },
      warning: { border: 'border-yellow-400',bg: 'bg-yellow-50',text: 'text-yellow-800',icon: '!' },
    };
    const alertMessages: Record<AlertType, { title: string; message: string }> = {
      success: { title: 'Success!', message: 'Your changes have been saved successfully.' },
      error:   { title: 'Error',    message: 'Something went wrong. Please try again.' },
      info:    { title: 'Info',     message: 'A new software update is available.' },
      warning: { title: 'Warning',  message: 'Your session will expire in 5 minutes.' },
    };

    const tabs = ['buttons', 'inputs', 'cards', 'modals', 'loaders', 'alerts'];
    const progressValues = [30, 60, 85];

    const buttonVariants = {
      primary:   'bg-indigo-600 text-white hover:bg-indigo-700',
      secondary: 'bg-purple-600 text-white hover:bg-purple-700',
      ghost:     'bg-transparent hover:bg-gray-100',
      danger:    'bg-red-600 text-white hover:bg-red-700',
      success:   'bg-green-600 text-white hover:bg-green-700',
    };
    const buttonSizes = { xs: 'px-2 py-1 text-xs', sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg', xl: 'px-8 py-4 text-xl' };

    const tabClass = computed(() => (id: string) =>
      cn('px-4 py-2 rounded-lg text-sm font-medium transition-colors',
        activeTab.value === id ? 'bg-indigo-600 text-white' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400')
    );

    const btnClass = (variant: keyof typeof buttonVariants, size: keyof typeof buttonSizes = 'md', extra = '') =>
      cn('inline-flex items-center justify-center font-medium rounded-lg transition-colors', buttonVariants[variant], buttonSizes[size], extra);

    return {
      activeTab, showPassword, liked, modalOpen, confirmOpen,
      alerts, alertConfig, alertMessages, tabs, progressValues,
      tabClass, btnClass, dismissAlert, resetAlerts,
    };
  },
  template: `
    <div style="font-family: inherit">
      <!-- Modals -->
      <teleport to="body">
        <div v-if="modalOpen || confirmOpen" @click="modalOpen=false;confirmOpen=false"
          style="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9998" />
        <div v-if="modalOpen" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem">
          <div style="background:white;border-radius:12px;width:100%;max-width:28rem;box-shadow:0 20px 40px rgba(0,0,0,0.2)">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:1.5rem;border-bottom:1px solid #e5e7eb">
              <strong>Example Modal</strong>
              <button @click="modalOpen=false" style="color:#9ca3af;cursor:pointer">✕</button>
            </div>
            <div style="padding:1.5rem">
              <p style="color:#6b7280;margin-bottom:1.5rem">This is a Vue 3 modal with Teleport and smooth animations.</p>
              <div style="display:flex;gap:.75rem;justify-content:flex-end">
                <button @click="modalOpen=false" :class="btnClass('ghost')">Cancel</button>
                <button @click="modalOpen=false" :class="btnClass('primary')">Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="confirmOpen" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem">
          <div style="background:white;border-radius:12px;width:100%;max-width:28rem;box-shadow:0 20px 40px rgba(0,0,0,0.2)">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:1.5rem;border-bottom:1px solid #e5e7eb">
              <strong>Delete item?</strong>
              <button @click="confirmOpen=false" style="color:#9ca3af;cursor:pointer">✕</button>
            </div>
            <div style="padding:1.5rem">
              <p style="color:#6b7280;margin-bottom:1.5rem">This action cannot be undone. Are you sure?</p>
              <div style="display:flex;gap:.75rem;justify-content:flex-end">
                <button @click="confirmOpen=false" :class="btnClass('ghost')">Cancel</button>
                <button @click="confirmOpen=false" :class="btnClass('danger')">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </teleport>

      <!-- Tab Navigation -->
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem">
        <button v-for="tab in tabs" :key="tab" :class="tabClass(tab)" @click="activeTab=tab">
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>

      <!-- Buttons -->
      <div v-if="activeTab==='buttons'" style="display:flex;flex-direction:column;gap:2rem">
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Variants</h3>
          <div style="display:flex;flex-wrap:wrap;gap:1rem">
            <button :class="btnClass('primary')">Primary</button>
            <button :class="btnClass('secondary')">Secondary</button>
            <button :class="btnClass('ghost')">Ghost</button>
            <button :class="btnClass('danger')">Danger</button>
            <button :class="btnClass('success')">Success</button>
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Sizes</h3>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem">
            <button :class="btnClass('primary','xs')">Extra Small</button>
            <button :class="btnClass('primary','sm')">Small</button>
            <button :class="btnClass('primary','md')">Medium</button>
            <button :class="btnClass('primary','lg')">Large</button>
            <button :class="btnClass('primary','xl')">Extra Large</button>
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">States</h3>
          <div style="display:flex;flex-wrap:wrap;gap:1rem">
            <button :class="btnClass('primary')" disabled style="opacity:.5;cursor:not-allowed">
              <svg class="animate-spin" style="width:1rem;height:1rem;margin-right:.5rem;display:inline" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity=".25"/>
                <path fill="currentColor" opacity=".75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>Loading
            </button>
            <button :class="btnClass('primary')" disabled style="opacity:.5;cursor:not-allowed">Disabled</button>
            <button :class="btnClass('primary','md','w-full')">Full Width</button>
          </div>
        </div>
      </div>

      <!-- Inputs -->
      <div v-if="activeTab==='inputs'" style="display:flex;flex-direction:column;gap:2rem;max-width:28rem">
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Basic</h3>
          <div style="display:flex;flex-direction:column;gap:1rem">
            <div v-for="(cfg,i) in [{label:'Name',type:'text',placeholder:'Bruno Xavier',icon:'👤'},{label:'Email',type:'email',placeholder:'brunovx6@gmail.com',icon:'✉'},{label:'Search',type:'text',placeholder:'Search...',icon:'🔍'}]" :key="i">
              <label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.25rem">{{cfg.label}}</label>
              <div style="position:relative">
                <span style="position:absolute;left:.75rem;top:50%;transform:translateY(-50%);color:#9ca3af">{{cfg.icon}}</span>
                <input :type="cfg.type" :placeholder="cfg.placeholder" style="width:100%;padding:.625rem 1rem .625rem 2.5rem;border-radius:.5rem;border:1px solid #d1d5db;outline:none;transition:box-shadow .2s;box-sizing:border-box" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Password</h3>
          <div>
            <label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.25rem">Password</label>
            <div style="position:relative">
              <span style="position:absolute;left:.75rem;top:50%;transform:translateY(-50%);color:#9ca3af">🔒</span>
              <input :type="showPassword?'text':'password'" placeholder="••••••••" style="width:100%;padding:.625rem 2.5rem;border-radius:.5rem;border:1px solid #d1d5db;outline:none;box-sizing:border-box" />
              <button @click="showPassword=!showPassword" style="position:absolute;right:.75rem;top:50%;transform:translateY(-50%);color:#9ca3af;cursor:pointer;background:none;border:none">
                {{showPassword?'🙈':'👁'}}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Validation</h3>
          <div style="display:flex;flex-direction:column;gap:1rem">
            <div>
              <label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.25rem">Valid email</label>
              <input value="bruno@email.com" style="width:100%;padding:.625rem 1rem;border-radius:.5rem;border:1px solid #22c55e;outline:none;box-sizing:border-box" />
            </div>
            <div>
              <label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.25rem">Invalid email</label>
              <input value="not-an-email" style="width:100%;padding:.625rem 1rem;border-radius:.5rem;border:1px solid #ef4444;outline:none;box-sizing:border-box" />
              <p style="font-size:.75rem;color:#ef4444;margin-top:.25rem">Please enter a valid email address.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div v-if="activeTab==='cards'" style="display:flex;flex-direction:column;gap:2rem">
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Profile Card</h3>
          <div style="width:16rem;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);background:white">
            <div style="height:6rem;background:linear-gradient(135deg,#6366f1,#8b5cf6)"></div>
            <div style="padding:0 1.25rem 1.25rem">
              <div style="width:4rem;height:4rem;border-radius:9999px;background:#e5e7eb;border:4px solid white;margin-top:-2rem;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.5rem">👤</div>
              <div style="font-weight:600">Bruno Xavier</div>
              <div style="font-size:.875rem;color:#6b7280;margin-bottom:1rem">Front-end Developer</div>
              <div style="display:flex;gap:.5rem">
                <button :class="btnClass('primary','sm')" style="flex:1">Follow</button>
                <button @click="liked=!liked" :style="liked?'color:#ef4444;border-color:#fca5a5':''" style="padding:.375rem .5rem;border-radius:.5rem;border:1px solid #d1d5db;cursor:pointer;background:white">❤</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Pricing Cards</h3>
          <div style="display:flex;flex-wrap:wrap;gap:1rem;align-items:flex-start">
            <div style="width:14rem;border-radius:12px;padding:1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.1);background:white">
              <div style="font-size:.875rem;opacity:.75;margin-bottom:.5rem">Free</div>
              <div style="font-size:1.875rem;font-weight:700;margin-bottom:1rem">$0<span style="font-size:.875rem;font-weight:400">/mo</span></div>
              <ul style="font-size:.875rem;list-style:none;padding:0;margin:0 0 1rem;display:flex;flex-direction:column;gap:.5rem">
                <li v-for="f in ['5 projects','Basic analytics','Community support']" :key="f">✓ {{f}}</li>
              </ul>
              <button :class="btnClass('primary','sm','w-full')">Get Started</button>
            </div>
            <div style="width:14rem;border-radius:12px;padding:1.5rem;background:#6366f1;color:white">
              <div style="font-size:.875rem;opacity:.75;margin-bottom:.5rem">Pro</div>
              <div style="font-size:1.875rem;font-weight:700;margin-bottom:1rem">$12<span style="font-size:.875rem;font-weight:400">/mo</span></div>
              <ul style="font-size:.875rem;list-style:none;padding:0;margin:0 0 1rem;display:flex;flex-direction:column;gap:.5rem">
                <li v-for="f in ['Everything in Free','Unlimited projects','Priority support','Custom domain']" :key="f">✓ {{f}}</li>
              </ul>
              <button style="width:100%;padding:.375rem .75rem;border-radius:.5rem;background:rgba(255,255,255,.2);color:white;border:none;cursor:pointer;font-size:.875rem;font-weight:500">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modals -->
      <div v-if="activeTab==='modals'" style="display:flex;flex-direction:column;gap:2rem">
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Modal Examples</h3>
          <div style="display:flex;flex-wrap:wrap;gap:1rem">
            <button :class="btnClass('primary')" @click="modalOpen=true">Open Modal</button>
            <button :class="btnClass('danger')" @click="confirmOpen=true">Confirm Delete</button>
          </div>
        </div>
        <p style="font-size:.875rem;color:#6b7280">Uses Vue 3 <code>&lt;Teleport&gt;</code> to render modals at the body level with backdrop click-to-close.</p>
      </div>

      <!-- Loaders -->
      <div v-if="activeTab==='loaders'" style="display:flex;flex-direction:column;gap:2rem">
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Spinners</h3>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:2rem">
            <div v-for="(cfg,i) in [{s:'1.25rem',c:'#6366f1'},{s:'2rem',c:'#6366f1'},{s:'3rem',c:'#6366f1'},{s:'2rem',c:'#10b981'},{s:'2rem',c:'#f59e0b'}]" :key="i"
              class="animate-spin" :style="\`width:\${cfg.s};height:\${cfg.s};border:4px solid #e5e7eb;border-top-color:\${cfg.c};border-radius:9999px\`" />
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Pulse Dots</h3>
          <div style="display:flex;gap:.375rem">
            <div v-for="i in 3" :key="i" class="animate-bounce"
              :style="\`width:.75rem;height:.75rem;background:#6366f1;border-radius:9999px;animation-delay:\${(i-1)*0.15}s\`" />
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Skeleton</h3>
          <div style="width:16rem;border-radius:12px;padding:1rem;box-shadow:0 4px 12px rgba(0,0,0,0.1);background:white;display:flex;flex-direction:column;gap:.75rem">
            <div style="display:flex;align-items:center;gap:.75rem">
              <div class="animate-pulse" style="width:2.5rem;height:2.5rem;border-radius:9999px;background:#e5e7eb"></div>
              <div style="flex:1;display:flex;flex-direction:column;gap:.375rem">
                <div class="animate-pulse" style="height:.75rem;background:#e5e7eb;border-radius:.25rem;width:75%"></div>
                <div class="animate-pulse" style="height:.75rem;background:#e5e7eb;border-radius:.25rem;width:50%"></div>
              </div>
            </div>
            <div class="animate-pulse" style="height:.75rem;background:#e5e7eb;border-radius:.25rem"></div>
            <div class="animate-pulse" style="height:.75rem;background:#e5e7eb;border-radius:.25rem;width:83%"></div>
            <div class="animate-pulse" style="height:2rem;background:#e5e7eb;border-radius:.5rem"></div>
          </div>
        </div>
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Progress Bar</h3>
          <div style="display:flex;flex-direction:column;gap:.75rem;max-width:24rem">
            <div v-for="val in progressValues" :key="val">
              <div style="display:flex;justify-content:space-between;font-size:.875rem;margin-bottom:.25rem">
                <span style="color:#6b7280">Progress</span><span style="font-weight:500">{{val}}%</span>
              </div>
              <div style="height:.5rem;background:#e5e7eb;border-radius:9999px;overflow:hidden">
                <div :style="\`width:\${val}%;height:100%;background:#6366f1;border-radius:9999px;transition:width 1s ease-out\`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alerts -->
      <div v-if="activeTab==='alerts'" style="display:flex;flex-direction:column;gap:2rem">
        <div>
          <h3 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem">Alert Types</h3>
          <div style="display:flex;flex-direction:column;gap:.75rem;max-width:32rem">
            <transition-group name="alert">
              <div v-for="type in alerts" :key="type"
                :class="[alertConfig[type].bg, alertConfig[type].border]"
                style="display:flex;align-items:flex-start;gap:.75rem;padding:1rem;border-radius:.5rem;border-left-width:4px;border-left-style:solid">
                <span :class="alertConfig[type].text" style="font-weight:700;font-size:.875rem;flex-shrink:0">{{alertConfig[type].icon}}</span>
                <div style="flex:1">
                  <p :class="alertConfig[type].text" style="font-weight:600;font-size:.875rem">{{alertMessages[type].title}}</p>
                  <p :class="alertConfig[type].text" style="font-size:.875rem;opacity:.8;margin-top:.125rem">{{alertMessages[type].message}}</p>
                </div>
                <button @click="dismissAlert(type)" :class="alertConfig[type].text" style="flex-shrink:0;opacity:.6;cursor:pointer;background:none;border:none;font-size:1rem">✕</button>
              </div>
            </transition-group>
            <div v-if="alerts.length===0" style="text-align:center;padding:2rem">
              <p style="color:#6b7280;margin-bottom:1rem">All alerts dismissed.</p>
              <button :class="btnClass('primary')" @click="resetAlerts">Reset Alerts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

// ── React wrapper that mounts the Vue app ─────────────────────────────────────
export default function VuePlayground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const app = createApp(VuePlaygroundApp);
    app.mount(containerRef.current);
    return () => app.unmount();
  }, []);

  return <div ref={containerRef} />;
}
