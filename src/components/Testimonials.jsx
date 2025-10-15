import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()

  // Approved testimonials (you manually add these after approval)
  const testimonials = [
    {
      name: t('Yassine'),
      role: t('Client'),
      text: t('testimonials.person1Text'),
      image: 'https://ui-avatars.com/api/?name=Client+One&background=dc2626&color=fff&size=128',
    },
    {
      name: t('Khalil'),
      role: t('testimonials.person2Role'),
      text: t('testimonials.person2Text'),
      image: 'https://ui-avatars.com/api/?name=Friend+Two&background=dc2626&color=fff&size=128',
    },
    {
      name: t('Hamza'),
      role: t('testimonials.person3Role'),
      text: t('testimonials.person3Text'),
      image: 'https://ui-avatars.com/api/?name=Client+Three&background=dc2626&color=fff&size=128',
    },
    
  ]

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('testimonials.title')} <span className="text-gradient">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden mask-gradient">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -(380 + 32) * testimonials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ willChange: 'transform' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 transition-all duration-300 flex-shrink-0 w-[380px] hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="text-primary-400 flex-shrink-0" size={24} />
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-500/50 shadow-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-base">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
