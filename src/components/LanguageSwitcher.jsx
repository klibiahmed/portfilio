import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          i18n.language === 'en' 
            ? 'border-primary-500 shadow-lg shadow-primary-500/50' 
            : 'border-gray-600 hover:border-gray-400'
        }`}
        title="English"
      >
        <img 
          src="https://flagcdn.com/w80/us.png" 
          alt="English" 
          className="w-full h-full object-cover"
        />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('fr')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          i18n.language === 'fr' 
            ? 'border-primary-500 shadow-lg shadow-primary-500/50' 
            : 'border-gray-600 hover:border-gray-400'
        }`}
        title="Français"
      >
        <img 
          src="https://flagcdn.com/w80/fr.png" 
          alt="Français" 
          className="w-full h-full object-cover"
        />
      </motion.button>
    </div>
  )
}

export default LanguageSwitcher
