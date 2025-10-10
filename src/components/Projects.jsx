import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Goutina Mobile App - HackMingle Hackathon',
      description: 'Prototype mobile app for Goutina, a local pastry shop in Ben Arous. Developed as part of the HackMingle Developer Student Club hackathon. Features include product browsing, ordering system, and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
      github: 'https://github.com/klibiahmed',
      demo: '#',
      period: '2023-2024',
    },
    {
      title: 'No More Slavery (NMS) Platform - ISIMA Hackathon',
      description: 'Complete UI/UX design and user experience for the No More Slavery platform. Created intuitive interface with modern design, including welcome page, donations, news feed, chat, and partner organizations management.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX Design', 'Wireframes', 'React.js', 'Adobe Photoshop'],
      github: 'https://github.com/klibiahmed',
      demo: '#',
      period: '2024-2025',
    },
    {
      title: 'BoomPlan - Event Reservation Platform',
      description: 'Full-stack online event reservation platform. Led team as Scrum Master (5 sprints) for development. Implemented REST APIs, reservation logic, real-time conflict management, and admin dashboard with role validation.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      tags: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind CSS'],
      github: 'https://github.com/klibiahmed',
      demo: '#',
      period: '2023-2025',
    },
    {
      title: 'Microsoft ISIMA Club Activities',
      description: 'Active member participating in hackathons, tech events, and community building. Contributing to programming education and fostering a collaborative tech environment.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Community', 'Hackathons', 'Teamwork', 'Leadership'],
      github: 'https://github.com/klibiahmed',
      demo: '#',
      period: 'Ongoing',
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and creativity
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
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
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
