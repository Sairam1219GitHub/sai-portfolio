'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0F14]/95 backdrop-blur-xl border-b border-gray-800/40 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="font-heading text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded"
            aria-label="B Sai Ram - Home"
          >
            B Sai Ram
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                role="menuitem"
                className={`font-medium text-sm transition-all duration-300 relative py-2 ${
                  activeSection === link.id
                    ? 'text-primary-400'
                    : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded`}
                onClick={() => setActiveSection(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full" aria-hidden="true"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D1D5DB] hover:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} aria-hidden="true" />
            ) : (
              <FaBars size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-6 pb-4 space-y-2 animate-fade-in bg-[#111827] backdrop-blur-xl rounded-xl p-6 border border-gray-800/40 shadow-2xl"
            role="menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                role="menuitem"
                className={`block font-medium py-3 px-4 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-gray-800/30'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setActiveSection(link.id)
                }}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

