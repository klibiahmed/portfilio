import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  
  const projects = [
    {
      title: t('projects.project1Title'),
      description: t('projects.project1Desc'),
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
      github: 'https://github.com/klibiahmed/Goutina',
      demo: '#',
      period: t('projects.project1Period'),
    },
    {
      title: t('projects.project2Title'),
      description: t('projects.project2Desc'),
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX Design', 'Wireframes', 'React.js', 'Adobe Photoshop'],
      github: 'https://github.com/klibiahmed/NMS-Platform',
      demo: '#',
      period: t('projects.project2Period'),
    },
    {
      title: t('projects.project3Title'),
      description: t('projects.project3Desc'),
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      tags: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind CSS'],
      github: 'https://github.com/klibiahmed/BoomPlan',
      demo: '#',
      period: t('projects.project3Period'),
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{project.period}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">{t('projects.code')}</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">{t('projects.demo')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
