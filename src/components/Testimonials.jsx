import { motion } from 'framer-motion'
import { Quote, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Testimonials = () => {
  const { t } = useTranslation()
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    testimonial: ''
  })

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send testimonial to your email for approval
      await emailjs.send(
        'service_xe2got8', // Replace with your EmailJS service ID
        'template_nqewwn8', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_role: formData.role,
          message: formData.testimonial,
          subject: 'New Testimonial Submission for Approval',
        },
        'k0pmZlPdIzeYpqRK4' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', role: '', testimonial: '' })
      setTimeout(() => {
        setShowForm(false)
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-primary-400 flex-shrink-0" size={24} />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Testimonial Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              {t('testimonials.addTestimonial')}
            </button>
          )}
        </motion.div>

        {/* Testimonial Submission Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-primary-400">
                  {t('testimonials.submitTitle')}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-400 mb-6">
                {t('testimonials.submitDescription')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('testimonials.yourName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                    placeholder={t('testimonials.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('testimonials.yourRole')}
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                    placeholder={t('testimonials.rolePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('testimonials.yourTestimonial')}
                  </label>
                  <textarea
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
                    placeholder={t('testimonials.testimonialPlaceholder')}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                    {t('testimonials.successMessage')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                    {t('testimonials.errorMessage')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('testimonials.sending') : t('testimonials.submit')}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
