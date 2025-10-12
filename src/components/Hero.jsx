import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()
  
  // Determine which resume to download based on language
  const resumeFile = i18n.language === 'fr' ? '/cv.pdf' : '/Resume.pdf'
  const downloadName = i18n.language === 'fr' ? 'Klibi_Ahmed_CV.pdf' : 'Klibi_Ahmed_Resume.pdf'
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Ahmed Klibi"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              {t('hero.greeting')} <span className="text-gradient">{t('hero.name')}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
              {t('hero.title')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <a
              href={resumeFile}
              download={downloadName}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border-2 border-primary-500/50 rounded-full font-semibold hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300 hover:scale-105 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              {t('hero.downloadResume')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/klibiahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/klibiahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ahmedklibi10@gmail.com"
              className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              {t('hero.viewWork')}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {t('hero.getInTouch')}
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero
