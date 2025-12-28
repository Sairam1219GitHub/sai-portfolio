import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa'

const projects = [
  {
    title: 'Whitebox Learning (WBL)',
    url: 'https://whitebox-learning.com/',
    github: null,
    description:
      'A comprehensive classroom and online-based training program designed specifically for developers and quality engineers. The flexible training options cater to both individual learners and corporate teams.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'JWT',
      'bcrypt',
      'MySQL',
      'Redux',
      'TailwindCSS',
      'Docker',
      'Jest',
      'Cypress',
    ],
    contributions: [
      'Developed responsive Login and Contact pages using ReactJS, NextJS, and TypeScript with full frontend and backend integration.',
      'Built RESTful APIs using Node.js and Express.js to handle authentication, contact form submissions, and dynamic data fetching.',
      'Implemented secure authentication using JWT tokens and bcrypt for password hashing on a FastAPI RESTful backend.',
      'Integrated contact form APIs to securely store and route user messages to a MySQL database.',
      'Utilized React Hooks (e.g., useState, useEffect, useContext) to manage component state and side effects efficiently.',
      'Designed mobile-first, cross-browser compatible UI with TailwindCSS for a seamless user experience.',
      'Managed global application state using Redux for consistent login and contact module behaviour.',
      'Configured Docker containers to streamline development and staging environments.',
      'Wrote unit and integration tests with Jest and Cypress to validate frontend workflows and backend API functionality.',
    ],
  },
  {
    title: 'Avatar - Whitebox Learning Admin Management System',
    url: null,
    github: null,
    description:
      'A centralized admin panel built to streamline internal operations for Whitebox Learning, including employee data management, candidate tracking, payroll processing, and access control. The application supports full CRUD functionality for HR and admin users, with a secure role-based system.',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'Docker',
      'Kubernetes',
      'GKE',
      'Axios',
      'JIRA',
    ],
    contributions: [
      'Developed backend APIs using Node.js and Express.js for user authentication, employee management, and candidate tracking modules.',
      'Designed and optimized MySQL database schemas for user profiles, candidate records, and payroll data.',
      'Implemented role-based access control (RBAC) to restrict views and actions based on user roles.',
      'Developed secure session handling using JWT authentication for login, logout, and session validation.',
      'Applied modern ES6+ concepts (async/await, Promises) for efficient API communication and state management.',
      'Employed Axios for seamless data fetching and synchronization between frontend and backend.',
      'Containerized the application using Docker and deployed it on Google Kubernetes Engine (GKE) for scalability.',
      'Used JIRA for Agile sprint planning, task tracking, and cross-functional team collaboration.',
      'Designed and developed the login page, user/admin dashboards, and candidate detail pages using NextJS and React.',
    ],
  },
]

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="section-container relative"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-title">Featured Projects</h2>
      <div className="max-w-6xl mx-auto space-y-10">
        {projects.map((project, index) => (
            <article
              key={index}
              className="glass-card group hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-500/20 p-3 rounded-xl">
                    <FaCode className="text-primary-400 text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-heading-3">{project.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 flex items-center gap-2 transition-colors group/link text-body-small focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#111827] rounded"
                      aria-label={`Visit ${project.title} website (opens in new tab)`}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={14} className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 flex items-center gap-2 transition-colors group/link text-body-small focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#111827] rounded"
                      aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                    >
                      <FaGithub size={16} className="group-hover/link:scale-110 transition-transform" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <p className="text-body mb-8">{project.description}</p>
            
            <div className="mb-8">
              <h4 className="font-heading font-semibold text-[#F9FAFB] mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary-500 rounded" aria-hidden="true"></span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2.5" role="list" aria-label={`Technologies used in ${project.title}`}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    role="listitem"
                    className="px-4 py-2 bg-primary-500/10 text-primary-300 rounded-full text-sm font-medium border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[#F9FAFB] mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary-500 rounded" aria-hidden="true"></span>
                Key Contributions
              </h4>
              <ul className="space-y-3" role="list">
                {project.contributions.map((contribution, contribIndex) => (
                  <li key={contribIndex} className="text-body flex items-start group/item">
                    <span className="text-primary-400 mr-3 mt-1.5 group-hover/item:scale-110 transition-transform flex-shrink-0" aria-hidden="true">▸</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

