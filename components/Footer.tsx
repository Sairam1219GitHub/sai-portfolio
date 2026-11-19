import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer 
      className="border-t border-gray-800/40 bg-[#0B0F14] backdrop-blur-sm"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-body-small text-center md:text-left">
              © {new Date().getFullYear()} B Sai Ram. AI Engineer & Full Stack Developer.
            </p>
          </div>
          <div className="flex space-x-5" role="list" aria-label="Social media links">
            <a
              href="https://www.linkedin.com/in/sairam1219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded p-2"
              aria-label="Connect on LinkedIn (opens in new tab)"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/sairam1219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded p-2"
              aria-label="View GitHub Profile (opens in new tab)"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:sairamb3917@gmail.com"
              className="text-[#9CA3AF] hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded p-2"
              aria-label="Send email to B Sai Ram"
            >
              <FaEnvelope size={20} aria-hidden="true" />
            </a>
            <a
              href="https://sai-portfolio-gules.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded p-2"
              aria-label="View Live Portfolio"
            >
              <FaGlobe size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

