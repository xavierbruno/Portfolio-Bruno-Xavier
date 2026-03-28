import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '@portfolio/shared';
import Button from '@/components/ui/Button';
import { Send, Mail, Code2, Link2, Phone } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendEmail } from '@/services/emailService';

export default function Contact() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await sendEmail(formData);

    if (success) {
      toast.success(t('contact.form.success'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error(t('contact.form.error'));
    }

    setIsLoading(false);
  };

  const socialLinks = [
    { icon: Code2, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Link2, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={t('contact.form.subject')}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isLoading}
                  leftIcon={<Send className="w-5 h-5" />}
                >
                  {isLoading ? t('contact.form.sending') : t('contact.form.send')}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">{t('contact.social')}</h3>
                <div className="space-y-4">
                  {socialLinks.map(
                    (social) =>
                      social.href && (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                        >
                          <social.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                          <span>{social.label}</span>
                        </a>
                      ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
