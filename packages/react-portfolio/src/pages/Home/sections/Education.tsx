import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { education } from '@portfolio/shared';
import { Calendar } from 'lucide-react';

export default function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t('education.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('education.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="glass rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <a
                      href={edu.url ? `https://${edu.url}` : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary-600 dark:text-primary-400 mb-2 hover:underline"
                    >
                      {edu.institution}
                    </a>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.endDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
