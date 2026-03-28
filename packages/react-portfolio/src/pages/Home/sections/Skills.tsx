import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skills } from '@portfolio/shared';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      id: 'frontend',
      label: t('skills.categories.frontend'),
      skills: skills.filter((s) => s.category === 'frontend'),
    },
    {
      id: 'backend',
      label: t('skills.categories.backend'),
      skills: skills.filter((s) => s.category === 'backend'),
    },
    {
      id: 'tools',
      label: t('skills.categories.tools'),
      skills: skills.filter((s) => s.category === 'tools'),
    },
    {
      id: 'soft',
      label: t('skills.categories.soft'),
      skills: skills.filter((s) => s.category === 'soft'),
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t('skills.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.label}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
