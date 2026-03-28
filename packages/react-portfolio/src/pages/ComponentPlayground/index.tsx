import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@/components/ui/Button';

export default function ComponentPlayground() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('buttons');

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('playground.title')}
          </h1>
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
          {/* Button Examples */}
          {activeTab === 'buttons' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="success">Success</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          )}

          {/* Other component examples would go here */}
        </div>
      </div>
    </div>
  );
}
