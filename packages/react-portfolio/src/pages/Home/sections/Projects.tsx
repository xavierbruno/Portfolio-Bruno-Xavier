import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '@portfolio/shared';
import Button from '@/components/ui/Button';
import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : filter === 'featured'
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter);

  const categories = [
    { id: 'all', label: t('projects.all') },
    { id: 'featured', label: t('projects.featured') },
    { id: 'web', label: t('projects.categories.web') },
    { id: 'mobile', label: t('projects.categories.mobile') },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-xl overflow-hidden card-hover">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" leftIcon={<ExternalLink className="w-4 h-4" />}>
                          {t('projects.viewProject')}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" leftIcon={<Code2 className="w-4 h-4" />}>
                          {t('projects.viewCode')}
                        </Button>
                      </a>
                    )}
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
