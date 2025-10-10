import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Licence en Informatique',
      institution: 'Institut Supérieur d\'Informatique (ISIMA)',
      location: 'Mahdia, Tunisia',
      period: '2023 - 2025',
      description: 'Computer Science degree with focus on software development, algorithms, and modern web technologies.',
    },
    {
      degree: 'Baccalauréat en Informatique',
      institution: 'Lycée Mhamdia',
      location: 'Mhamdia, Tunisia',
      period: '2023',
      description: 'High school diploma in Computer Science with strong foundation in programming and mathematics.',
    },
  ]

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Intermediate' },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and language proficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Education Timeline */}
          <div className="md:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-400 flex-shrink-0 mt-1">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-primary-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0"
                >
                  <span className="text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-primary-400 text-sm">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
