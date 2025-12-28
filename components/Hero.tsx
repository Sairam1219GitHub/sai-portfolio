'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaUser, FaArrowDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28"
      aria-label="Hero section"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[#0B0F14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Profile Photo */}
          <div
            className={`flex justify-center lg:justify-start animate-slide-in-left ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden animate-float">
              {/* Blue Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/30 via-primary-400/20 to-primary-600/30 rounded-3xl blur-xl opacity-60 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-3xl"></div>
              <div className="absolute inset-0.5 border-2 border-primary-500/40 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
              
              {!imageError ? (
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="B Sai Ram, Experienced Full Stack Developer professional headshot"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                    onError={() => {
                      // Try alternative formats
                      const img = document.createElement('img')
                      img.onerror = () => setImageError(true)
                      img.src = '/images/profile-photo.png'
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#111827] rounded-3xl">
                  <FaUser className="text-9xl text-primary-400/50" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`text-center lg:text-left animate-slide-in-right space-y-6 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-heading-1">
                B Sai Ram
              </h1>
              <h2 className="text-heading-2 gradient-text">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-body max-w-2xl mx-auto lg:mx-0">
              Experienced Full Stack Developer with 2+ years of expertise in building scalable, high-performance web applications. 
              Specialized in React, Next.js, Node.js, and cloud-native deployments with a strong focus on clean UI, secure APIs, 
              and production-ready systems.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-2" role="list" aria-label="Social media links">
              <a
                href="https://www.linkedin.com/in/sairam1219/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#9CA3AF] hover:text-primary-400 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
              <a
                href="mailto:BSAIRAM3011@GMAIL.COM"
                className="text-3xl text-[#9CA3AF] hover:text-primary-400 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded"
                aria-label="Send email to B Sai Ram"
              >
                <FaEnvelope aria-hidden="true" />
              </a>
              <a
                href="tel:+918185958722"
                className="text-3xl text-[#9CA3AF] hover:text-primary-400 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded"
                aria-label="Call B Sai Ram"
              >
                <FaPhone aria-hidden="true" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2"
                aria-label="View my projects"
              >
                View Projects
                <FaArrowDown className="text-sm" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                aria-label="Contact me"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="text-[#9CA3AF] hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded p-2"
          aria-label="Scroll to about section"
        >
          <FaArrowDown size={24} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

