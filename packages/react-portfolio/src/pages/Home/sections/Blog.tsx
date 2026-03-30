import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '@/components/ui/Button';
import { Clock, ExternalLink } from 'lucide-react';

interface DevToPost {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
  social_image: string;
}

const DEVTO_USERNAME = 'xavierbruno';

export default function Blog() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">{t('blog.noPosts')}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden card-hover flex flex-col"
              >
                {(post.cover_image || post.social_image) && (
                  <img
                    src={post.cover_image || post.social_image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.reading_time_minutes} {t('blog.minRead')}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 leading-snug">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{post.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tag_list.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        fullWidth
                        rightIcon={<ExternalLink className="w-4 h-4" />}
                      >
                        {t('blog.viewOnDevTo')}
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
