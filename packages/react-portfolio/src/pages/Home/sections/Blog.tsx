import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { blogPosts, formatDate } from '@portfolio/shared';
import Button from '@/components/ui/Button';
import { Clock, ExternalLink } from 'lucide-react';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t('blog.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('blog.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 card-hover flex flex-col"
            >
              <div className="mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>{formatDate(post.date)}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>
                      {post.readTime} {t('blog.minRead')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                {post.devToUrl && (
                  <a href={post.devToUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="sm"
                      fullWidth
                      rightIcon={<ExternalLink className="w-4 h-4" />}
                    >
                      {t('blog.viewOnDevTo')}
                    </Button>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
