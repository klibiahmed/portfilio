import { motion, AnimatePresence } from 'framer-motion'
import { Github, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Projects = () => {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const projects = [
    {
      title: t('projects.project1Title'),
      description: t('projects.project1Desc'),
      image: '/projects/goutina/iPhone 13 & 14 - 2.png',
      tags: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
      github: 'https://github.com/klibiahmed/Goutina',
      period: t('projects.project1Period'),
      screenshots: [
        '/projects/goutina/profile.png',
        '/projects/goutina/iPhone 13 & 14 - 2.png',
        '/projects/goutina/iPhone 13 & 14 - 3.jpg',
        '/projects/goutina/iPhone 13 & 14 - 5.jpg',
        '/projects/goutina/iPhone 13 & 14 - 9.jpg',
      ]
    },
    {
      title: t('projects.project2Title'),
      description: t('projects.project2Desc'),
      image: '/projects/nms/Desktop - 1.png',
      tags: ['Figma', 'UI/UX Design', 'Wireframes', 'React.js', 'Adobe Photoshop'],
      github: 'https://github.com/klibiahmed/NMS-Platform',
      period: t('projects.project2Period'),
      screenshots: [
        '/projects/nms/Desktop - 1.png',
        '/projects/nms/Frame 3.png',
        '/projects/nms/Frame 4.png',
        '/projects/nms/iPhone 13 & 14 - 1.png',
        '/projects/nms/iPhone 13 & 14 - 2 (2).png',
        '/projects/nms/iPhone 13 & 14 - 3.png',
        '/projects/nms/iPhone 13 & 14 - 4.png',
      ]
    },
    {
      title: t('projects.project3Title'),
      description: t('projects.project3Desc'),
      image: '/projects/salle/Screenshot 2025-10-15 203317.png',
      tags: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind CSS'],
      github: 'https://github.com/klibiahmed/BoomPlan',
      period: t('projects.project3Period'),
      screenshots: [
        '/projects/salle/Screenshot 2025-10-15 203317.png',
        '/projects/salle/Screenshot 2025-10-15 203337.png',
        '/projects/salle/Screenshot 2025-10-15 203405.png',
        '/projects/salle/Screenshot 2025-10-15 203419.png',
        '/projects/salle/Screenshot 2025-10-15 203442.png',
        '/projects/salle/Screenshot 2025-10-15 203500.png',
      ]
    },
    {
      title: t('projects.project4Title'),
      description: t('projects.project4Desc'),
      image: '/projects/crud/Screenshot 2025-10-15 204654.png',
      tags: ['PHP', 'MySQL', 'CRUD', 'Bootstrap', 'Web Development'],
      github: 'https://github.com/klibiahmed/crud',
      period: t('projects.project4Period'),
      screenshots: [
        '/projects/crud/Screenshot 2025-10-15 204654.png',
        '/projects/crud/Screenshot 2025-10-15 204707.png',
      ]
    },
    {
      title: t('projects.project5Title'),
      description: t('projects.project5Desc'),
      image: '/projects/portfolio/hero.png',
      tags: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18n', 'EmailJS'],
      github: 'https://github.com/klibiahmed/portfilio',
      period: t('projects.project5Period'),
      screenshots: [
        '/projects/portfolio/hero.png',
        '/projects/portfolio/about.png',
        '/projects/portfolio/skills.png',
        '/projects/portfolio/projects.png',
        '/projects/portfolio/contact.png',
      ]
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }

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
              className="glass-effect rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <span className="text-white text-lg font-semibold">View Screenshots</span>
                </div>
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                    <span className="text-sm">{t('projects.code')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for project screenshots */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>

                {/* Project info header */}
                <div className="p-6 border-b border-slate-800">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image carousel */}
                <div className="relative bg-slate-950 p-8">
                  <div className="relative aspect-video flex items-center justify-center">
                    <img
                      src={selectedProject.screenshots[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="max-w-full max-h-[60vh] object-contain rounded-lg"
                      onError={(e) => {
                        e.target.src = selectedProject.image
                      }}
                    />
                  </div>

                  {/* Navigation arrows */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                      >
                        <ChevronLeft size={24} className="text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                      >
                        <ChevronRight size={24} className="text-white" />
                      </button>
                    </>
                  )}

                  {/* Image indicators */}
                  {selectedProject.screenshots.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {selectedProject.screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? 'bg-primary-500 w-8'
                              : 'bg-slate-600 hover:bg-slate-500'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer with GitHub link */}
                <div className="p-6 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    {currentImageIndex + 1} / {selectedProject.screenshots.length}
                  </span>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">View on GitHub</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
