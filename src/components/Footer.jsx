import { Heart, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/klibiahmed', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/klibiahmed', label: 'LinkedIn' },
  ]

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-gradient mb-2 inline-block">
              Klibi Ahmed
            </a>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
              Made with <Heart size={16} className="text-red-500 fill-current" /> © {currentYear}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            Designed & Built by Klibi Ahmed | klibiahmed.me
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
