import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '@portfolio/shared';
import Button from '@/components/ui/Button';
import { Download } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative z-10 py-20 bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('about.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:flex-1">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/resume.pdf" download="curriculum-vitae-bruno-xavier.pdf">
                    <Button leftIcon={<Download className="w-5 h-5" />}>
                      {t('about.downloadResume')}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 hidden dark:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-50"></div>
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="relative rounded-full w-64 h-64 object-cover border-4 border-white dark:border-dark-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
