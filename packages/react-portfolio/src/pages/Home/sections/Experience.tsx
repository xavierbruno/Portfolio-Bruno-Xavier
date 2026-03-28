import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences, formatDate } from '@portfolio/shared';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="glass rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(exp.startDate)} -{' '}
                        {exp.current ? t('experience.current') : formatDate(exp.endDate)}
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                      {t('experience.current')}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                {exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">{t('experience.achievements')}:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
