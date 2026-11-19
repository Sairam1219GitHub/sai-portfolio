'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaHandshake, FaGlobe, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      // Option 1: Use API route (recommended for production)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage(data.message || 'Thank you for your message! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        
        // Optionally open email client with pre-filled message
        if (data.mailtoLink) {
          // Uncomment the line below if you want to open email client automatically
          // window.location.href = data.mailtoLink
        }
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact me directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section 
      id="contact" 
      className="section-container relative"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="section-title">Get In Touch</h2>
      <div className="max-w-6xl mx-auto">
        <div className="glass-card mb-10 text-center">
          <p className="text-body mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex items-center justify-center gap-3 text-primary-400">
            <FaHandshake className="text-2xl" aria-hidden="true" />
            <p className="text-xl font-heading font-semibold gradient-text">Let's Work Together</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-4">
            <a
              href="mailto:sairamb3917@gmail.com"
              className="glass-card group hover:border-primary-500/40 hover:scale-[1.01] transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded-2xl"
              aria-label="Send email to B Sai Ram"
            >
              <div className="flex items-center">
                <div className="bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <FaEnvelope className="text-primary-400 text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-body-small mb-1">Email</p>
                  <p className="text-[#F9FAFB] font-semibold text-base sm:text-lg break-all">sairamb3917@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+918185958722"
              className="glass-card group hover:border-primary-500/40 hover:scale-[1.01] transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded-2xl"
              aria-label="Call B Sai Ram"
            >
              <div className="flex items-center">
                <div className="bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <FaPhone className="text-primary-400 text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-body-small mb-1">Phone</p>
                  <p className="text-[#F9FAFB] font-semibold text-lg">+91 81859 58722</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sairam1219/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group hover:border-primary-500/40 hover:scale-[1.01] transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded-2xl"
              aria-label="Connect on LinkedIn (opens in new tab)"
            >
              <div className="flex items-center">
                <div className="bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <FaLinkedin className="text-primary-400 text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-body-small mb-1">LinkedIn</p>
                  <p className="text-[#F9FAFB] font-semibold text-lg">linkedin.com/in/sairam1219</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/sairam1219"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group hover:border-primary-500/40 hover:scale-[1.01] transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0B0F14] rounded-2xl"
              aria-label="View GitHub Profile (opens in new tab)"
            >
              <div className="flex items-center">
                <div className="bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <FaGithub className="text-primary-400 text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-body-small mb-1">GitHub</p>
                  <p className="text-[#F9FAFB] font-semibold text-lg">github.com/sairam1219</p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card">
                <div className="flex items-center">
                  <div className="bg-primary-500/20 p-3 rounded-xl mr-3">
                    <FaMapMarkerAlt className="text-primary-400 text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-body-small">Location</p>
                    <p className="text-[#F9FAFB] font-semibold text-sm">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <a
                href="https://sai-portfolio-gules.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group hover:border-primary-500/40 transition-all block focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl"
                aria-label="Visit Portfolio Website"
              >
                <div className="flex items-center">
                  <div className="bg-primary-500/20 p-3 rounded-xl mr-3 group-hover:bg-primary-500/30 transition-colors">
                    <FaGlobe className="text-primary-400 text-xl" aria-hidden="true" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-body-small">Portfolio URL</p>
                    <p className="text-primary-400 font-semibold text-xs truncate">sai-portfolio-gules.vercel.app</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-heading-3 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-body-small mb-2 text-[#D1D5DB]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-gray-800/50 rounded-lg text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-body-small mb-2 text-[#D1D5DB]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-gray-800/50 rounded-lg text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-body-small mb-2 text-[#D1D5DB]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0B0F14] border border-gray-800/50 rounded-lg text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                  role="alert"
                >
                  {submitStatus === 'success' ? (
                    <FaCheckCircle className="text-lg mt-0.5 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <FaExclamationCircle className="text-lg mt-0.5 flex-shrink-0" aria-hidden="true" />
                  )}
                  <p className="text-sm">{statusMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-sm" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

