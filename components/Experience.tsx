import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa'

const experiences = [
  {
    company: 'Innovapath IT Solutions',
    location: 'Hyderabad',
    position: 'Software Developer',
    period: '2023 – 2025',
    impact: [
      'Built scalable full-stack applications serving thousands of users with 99.9% uptime',
      'Reduced application load time by 40% through performance optimization techniques',
      'Implemented secure authentication systems handling 10K+ daily API requests',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'Kubernetes', 'AWS'],
    responsibilities: [
      'Developed and maintained full stack web applications using React.js, JavaScript (ES6+), Node.js, and Express.js, ensuring scalability and performance.',
      'Built responsive and interactive user interfaces using React, Tailwind CSS, HTML5, and CSS3, improving user experience across devices.',
      'Implemented RESTful APIs and integrated frontend applications using Axios and AJAX for dynamic data handling.',
      'Managed global application state using Redux, enabling consistent data flow across components.',
      'Optimized application performance using lazy loading, code splitting, memoization, and efficient Webpack configurations.',
      'Containerized applications using Docker and supported deployments on Kubernetes (GKE).',
      'Followed Agile/Scrum methodologies, participated in sprint planning, and tracked tasks using JIRA.',
      'Collaborated with cross-functional teams and used Git for version control and CI/CD workflows.',
    ],
  },
  {
    company: 'Microline Information Systems',
    location: 'Hyderabad',
    position: 'UI Developer',
    period: 'Mar-Nov 2023',
    impact: [
      'Delivered 15+ pixel-perfect responsive web pages with 100% design accuracy',
      'Improved front-end performance by 35% through optimization techniques',
      'Ensured cross-browser compatibility across all major browsers',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Git'],
    responsibilities: [
      'Designed and developed responsive user interfaces using HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS.',
      'Converted UI/UX designs and mockups into pixel-perfect web pages.',
      'Ensured cross-browser compatibility and mobile-first design principles.',
      'Improved front-end performance through CSS and JavaScript optimization.',
      'Integrated frontend components with backend APIs for seamless data flow.',
      'Worked in Agile development environments and collaborated using Git.',
    ],
  },
]

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="section-container relative"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="section-title">Work Experience</h2>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/40 to-primary-600/40 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <article 
                key={index} 
                className="relative glass-card ml-0 md:ml-16 animate-slide-up" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-8 hidden md:block" aria-hidden="true">
                  <div className="w-6 h-6 bg-primary-500 rounded-full border-4 border-[#0B0F14] glow-effect"></div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-primary-500/20 p-4 rounded-xl mr-4">
                    <FaBriefcase className="text-primary-400 text-2xl" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-3 mb-2">{exp.position}</h3>
                    <p className="text-xl gradient-text font-semibold mb-3">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-6 text-body-small mb-4">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sm" aria-hidden="true" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sm" aria-hidden="true" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Impact Points */}
                <div className="mb-6 p-4 bg-primary-500/5 rounded-xl border border-primary-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <FaRocket className="text-primary-400" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-[#F9FAFB] text-sm">Key Impact</h4>
                  </div>
                  <ul className="space-y-2" role="list">
                    {exp.impact.map((impact, impactIndex) => (
                      <li key={impactIndex} className="text-body-small flex items-start">
                        <span className="text-primary-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaChartLine className="text-primary-400 text-sm" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-[#F9FAFB] text-sm">Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-primary-500/10 text-primary-300 rounded-full text-xs font-medium border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-heading font-semibold text-[#F9FAFB] mb-3 text-sm flex items-center gap-2">
                    <FaUsers className="text-primary-400 text-sm" aria-hidden="true" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-3" role="list">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-body flex items-start group">
                        <span className="text-primary-400 mr-3 mt-1.5 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

