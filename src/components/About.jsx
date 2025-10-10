import { motion } from 'framer-motion'
import { Code2, Palette, Rocket } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail and UX.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and delivering exceptional user experiences.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Computer Science Student | UI/UX Designer | Microsoft ISIMA Club Member
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a Computer Science student at ISIMA (Institut Supérieur d'Informatique) in Mahdia, Tunisia. 
                As a Scrum Master and Full Stack Developer, I specialize in creating innovative web and mobile applications 
                with a strong focus on UI/UX design and user experience.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Active member of the Microsoft ISIMA Club, I participate in hackathons and contribute to building 
                a collaborative tech community. I'm passionate about problem-solving, teamwork, and continuous learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me playing football or exploring new technologies and design trends.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
