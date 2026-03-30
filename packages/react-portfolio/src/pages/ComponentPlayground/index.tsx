import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@portfolio/shared';
import Button from '@/components/ui/Button';
import {
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
  X,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Search,
  Star,
  Heart,
  Code2,
} from 'lucide-react';

// ── Input ──────────────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
function Input({ label, error, leftIcon, rightIcon, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{label}</label>}
      <div className="relative">
        {leftIcon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{leftIcon}</span>}
        <input
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-dark-800 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            error
              ? 'border-red-500 dark:border-red-400'
              : 'border-gray-300 dark:border-dark-600',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            className,
          )}
          {...props}
        />
        {rightIcon && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{rightIcon}</span>}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

// ── Alert ──────────────────────────────────────────────────────────────────────
type AlertType = 'success' | 'error' | 'info' | 'warning';
interface AlertProps {
  type: AlertType;
  title: string;
  message: string;
  onClose?: () => void;
}
const alertConfig = {
  success: { icon: CheckCircle, bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-400', text: 'text-green-800 dark:text-green-300' },
  error:   { icon: AlertCircle,   bg: 'bg-red-50 dark:bg-red-900/20',   border: 'border-red-400',   text: 'text-red-800 dark:text-red-300'   },
  info:    { icon: Info,           bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-400',  text: 'text-blue-800 dark:text-blue-300'  },
  warning: { icon: AlertTriangle,  bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-400', text: 'text-yellow-800 dark:text-yellow-300' },
};
function Alert({ type, title, message, onClose }: AlertProps) {
  const { icon: Icon, bg, border, text } = alertConfig[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={cn('flex items-start gap-3 p-4 rounded-lg border-l-4', bg, border)}
    >
      <Icon className={cn('w-5 h-5 mt-0.5 shrink-0', text)} />
      <div className="flex-1">
        <p className={cn('font-semibold text-sm', text)}>{title}</p>
        <p className={cn('text-sm mt-0.5 opacity-80', text)}>{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className={cn('shrink-0 opacity-60 hover:opacity-100', text)}>
          <X className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
}

// ── Modal ──────────────────────────────────────────────────────────────────────
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
function Modal({ open, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-xl w-full max-w-md">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-600">
                <h3 className="text-lg font-semibold">{title}</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Loaders ────────────────────────────────────────────────────────────────────
function Spinner({ size = 'md', color = 'primary' }: { size?: 'sm' | 'md' | 'lg'; color?: string }) {
  const sizes = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' };
  return (
    <div className={cn('border-4 border-gray-200 rounded-full animate-spin', sizes[size])}
      style={{ borderTopColor: color === 'primary' ? '#6366f1' : color }} />
  );
}
function PulseDots() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-primary-500 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
function SkeletonCard() {
  return (
    <div className="glass rounded-xl p-4 space-y-3 w-64">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-dark-600 animate-pulse" />
        <div className="flex-1 space-y-1.5">
          <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse w-3/4" />
          <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse w-1/2" />
        </div>
      </div>
      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse" />
      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded animate-pulse w-5/6" />
      <div className="h-8 bg-gray-300 dark:bg-dark-600 rounded animate-pulse mt-2" />
    </div>
  );
}

// ── Cards ──────────────────────────────────────────────────────────────────────
function ProfileCard() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden w-64 card-hover">
      <div className="h-24 bg-gradient-to-r from-primary-500 to-secondary-500" />
      <div className="px-5 pb-5">
        <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-dark-600 border-4 border-white dark:border-dark-800 -mt-8 mb-3 flex items-center justify-center">
          <User className="w-7 h-7 text-gray-500" />
        </div>
        <h4 className="font-semibold">Bruno Xavier</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Front-end Developer</p>
        <div className="flex gap-2">
          <Button size="sm" fullWidth>Follow</Button>
          <button
            onClick={() => setLiked(!liked)}
            className={cn('p-2 rounded-lg border transition-colors', liked ? 'text-red-500 border-red-300' : 'border-gray-300 dark:border-dark-600')}
          >
            <Heart className={cn('w-4 h-4', liked && 'fill-current')} />
          </button>
        </div>
      </div>
    </div>
  );
}
function StatsCard() {
  return (
    <div className="glass rounded-xl p-5 w-64 card-hover space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Repository</h4>
        <Code2 className="w-5 h-5 text-gray-400" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">A full-stack warehouse management system with Docker and PostgreSQL.</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 12</span>
        <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> 5</span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" /> JavaScript
      </div>
    </div>
  );
}
function PricingCard({ featured }: { featured?: boolean }) {
  return (
    <div className={cn('rounded-xl p-6 w-56 space-y-4', featured ? 'bg-primary-600 text-white' : 'glass card-hover')}>
      <p className="text-sm font-medium opacity-75">{featured ? 'Pro' : 'Free'}</p>
      <p className="text-3xl font-bold">{featured ? '$12' : '$0'}<span className="text-sm font-normal opacity-75">/mo</span></p>
      <ul className="space-y-2 text-sm">
        {(featured ? ['Everything in Free', 'Unlimited projects', 'Priority support', 'Custom domain'] : ['5 projects', 'Basic analytics', 'Community support']).map(f => (
          <li key={f} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <Button variant={featured ? 'ghost' : 'primary'} size="sm" fullWidth className={featured ? 'bg-white/20 hover:bg-white/30 text-white' : ''}>
        Get Started
      </Button>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function ComponentPlayground() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('buttons');

  // Input state
  const [showPassword, setShowPassword] = useState(false);

  // Alert state
  const [alerts, setAlerts] = useState<AlertType[]>(['success', 'error', 'info', 'warning']);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const components = [
    { id: 'buttons', label: 'playground.components.buttons' },
    { id: 'inputs', label: 'playground.components.inputs' },
    { id: 'cards', label: 'playground.components.cards' },
    { id: 'modals', label: 'playground.components.modals' },
    { id: 'loaders', label: 'playground.components.loaders' },
    { id: 'alerts', label: 'playground.components.alerts' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Example Modal">
        <p className="text-gray-600 dark:text-gray-400 mb-6">This is a modal dialog with smooth animations. You can put any content here — forms, images, confirmations.</p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button onClick={() => setModalOpen(false)}>Confirm</Button>
        </div>
      </Modal>

      <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} title="Delete item?">
        <p className="text-gray-600 dark:text-gray-400 mb-6">This action cannot be undone. Are you sure you want to delete this item permanently?</p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setConfirmOpen(false)}>Delete</Button>
        </div>
      </Modal>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t('playground.title')}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('playground.subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {components.map((component) => (
            <Button
              key={component.id}
              variant={activeTab === component.id ? 'primary' : 'ghost'}
              onClick={() => setActiveTab(component.id)}
            >
              {t(component.label)}
            </Button>
          ))}
        </div>

        <div className="glass rounded-xl p-8">

          {/* Buttons */}
          {activeTab === 'buttons' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="success">Success</Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          )}

          {/* Inputs */}
          {activeTab === 'inputs' && (
            <div className="space-y-8 max-w-md">
              <div>
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <div className="space-y-4">
                  <Input label="Name" placeholder="Bruno Xavier" leftIcon={<User className="w-4 h-4" />} />
                  <Input label="Email" type="email" placeholder="brunovx6@gmail.com" leftIcon={<Mail className="w-4 h-4" />} />
                  <Input label="Search" placeholder="Search..." leftIcon={<Search className="w-4 h-4" />} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Password</h3>
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  leftIcon={<Lock className="w-4 h-4" />}
                  rightIcon={
                    <button onClick={() => setShowPassword(!showPassword)} className="hover:text-gray-600">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Validation</h3>
                <div className="space-y-4">
                  <Input label="Valid email" defaultValue="bruno@email.com" className="border-green-500 focus:ring-green-500" />
                  <Input label="Invalid email" defaultValue="not-an-email" error="Please enter a valid email address." />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Textarea</h3>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cards */}
          {activeTab === 'cards' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Profile Card</h3>
                <ProfileCard />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Stats / Repo Card</h3>
                <StatsCard />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Pricing Cards</h3>
                <div className="flex flex-wrap gap-4 items-start">
                  <PricingCard />
                  <PricingCard featured />
                </div>
              </div>
            </div>
          )}

          {/* Modals */}
          {activeTab === 'modals' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Modal Examples</h3>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                  <Button variant="danger" onClick={() => setConfirmOpen(true)}>Confirm Delete</Button>
                </div>
              </div>
              <div className="glass rounded-xl p-6 max-w-md opacity-70 pointer-events-none">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Preview</h4>
                  <X className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Modal content goes here. Click the buttons above to see live modals with backdrop and animations.</p>
                <div className="flex gap-3 justify-end">
                  <Button variant="ghost" size="sm">Cancel</Button>
                  <Button size="sm">Confirm</Button>
                </div>
              </div>
            </div>
          )}

          {/* Loaders */}
          {activeTab === 'loaders' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Spinners</h3>
                <div className="flex flex-wrap items-center gap-8">
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Spinner size="md" color="#10b981" />
                  <Spinner size="md" color="#f59e0b" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Pulse Dots</h3>
                <PulseDots />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Skeleton</h3>
                <SkeletonCard />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Progress Bar</h3>
                <div className="space-y-3 max-w-sm">
                  {[30, 60, 85].map((val) => (
                    <div key={val}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="font-medium">{val}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Alerts */}
          {activeTab === 'alerts' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Alert Types</h3>
                <div className="space-y-3 max-w-lg">
                  <AnimatePresence>
                    {alerts.includes('success') && (
                      <Alert key="success" type="success" title="Success!" message="Your changes have been saved successfully." onClose={() => setAlerts(a => a.filter(x => x !== 'success'))} />
                    )}
                    {alerts.includes('error') && (
                      <Alert key="error" type="error" title="Error" message="Something went wrong. Please try again." onClose={() => setAlerts(a => a.filter(x => x !== 'error'))} />
                    )}
                    {alerts.includes('info') && (
                      <Alert key="info" type="info" title="Info" message="A new software update is available." onClose={() => setAlerts(a => a.filter(x => x !== 'info'))} />
                    )}
                    {alerts.includes('warning') && (
                      <Alert key="warning" type="warning" title="Warning" message="Your session will expire in 5 minutes." onClose={() => setAlerts(a => a.filter(x => x !== 'warning'))} />
                    )}
                  </AnimatePresence>
                  {alerts.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">All alerts dismissed.</p>
                      <Button onClick={() => setAlerts(['success', 'error', 'info', 'warning'])}>Reset Alerts</Button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Without Close</h3>
                <div className="space-y-3 max-w-lg">
                  <Alert type="info" title="Read only" message="This alert cannot be dismissed." />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
