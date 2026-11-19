import { FaExternalLinkAlt, FaGithub, FaBrain, FaCode, FaCogs } from 'react-icons/fa'

const projects = [
  {
    title: 'TalentScreen — Production RAG Recruitment Assistant',
    category: 'Production RAG & Multi-Agent System',
    icon: FaBrain,
    url: null,
    github: null,
    description:
      'An enterprise-grade recruitment knowledge assistant powered by Retrieval-Augmented Generation (RAG). Replaces traditional keyword ATS search with deep semantic candidate discovery, evaluation, and comparison across resumes, job descriptions, interview guides, and hiring SOPs.',
    technologies: [
      'FastAPI',
      'Python',
      'Milvus (Vector DB)',
      'LangChain',
      'BM25 Search',
      'BGE Cross-Encoder',
      'AWS Bedrock (Claude 3.7)',
      'IBM Docling',
      'Redis Caching',
      'PostgreSQL',
      'Langfuse',
      'Docker Compose',
      'React',
    ],
    contributions: [
      'Architected end-to-end production RAG platform combining Milvus dense vector search (HNSW index) and BM25 lexical search with Reciprocal Rank Fusion (RRF).',
      'Integrated BAAI/bge-reranker-base cross-encoder reranker to maximize context precision and recall for top-k candidate matching.',
      'Engineered asynchronous document ingestion pipelines utilizing IBM Docling for high-fidelity PDF resume parsing and semantic chunking with overlap.',
      'Developed provider-agnostic LLM generation supporting AWS Bedrock (Claude 3.7 Sonnet) and Anthropic with grounded context and zero-hallucination prompts.',
      'Built automated security guardrails including regex-based PII redaction (emails/phone numbers) and prompt injection mitigation.',
      'Implemented Redis query caching and PostgreSQL audit logging to achieve sub-second response times and complete audit trails.',
      'Integrated Langfuse for end-to-end observability, tracing query executions, latency profiling, and token usage monitoring.',
      'Containerized full 7-service microservices stack (FastAPI, Milvus, Etcd, MinIO, Redis, PostgreSQL, React UI) using Docker Compose.',
    ],
  },
  {
    title: 'Whitebox Learning (WBL)',
    category: 'Full-Stack Learning Management Platform',
    icon: FaCode,
    url: 'https://whitebox-learning.com/',
    github: null,
    description:
      'A comprehensive classroom and online-based training platform designed for developers and quality engineers to upskill across industry-aligned technologies with flexible learning pathways.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'FastAPI',
      'JWT',
      'bcrypt',
      'MySQL',
      'Redux',
      'Tailwind CSS',
      'Docker',
      'Jest',
      'Cypress',
    ],
    contributions: [
      'Developed responsive Login and Contact modules using React.js, Next.js, and TypeScript with backend integration.',
      'Built RESTful APIs using Node.js, Express.js, and FastAPI for authentication, contact form processing, and dynamic data fetching.',
      'Implemented JWT-based authentication and bcrypt password hashing for secure session management.',
      'Integrated contact form APIs with MySQL for data validation and persistence.',
      'Managed application state using Redux and implemented automated integration tests using Jest and Cypress.',
      'Configured Docker containers to standardize application environments.',
    ],
  },
  {
    title: 'Avatar – Whitebox Learning Admin Management System',
    category: 'Enterprise Administration Platform',
    icon: FaCogs,
    url: null,
    github: null,
    description:
      'An internal enterprise administration platform built to streamline operations for Whitebox Learning, including employee records, candidate tracking, payroll processing, and granular access control.',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'Docker',
      'Kubernetes (GKE)',
      'Tailwind CSS',
      'Axios',
      'JIRA',
    ],
    contributions: [
      'Developed backend microservices using Node.js and Express.js for authentication, employee records, and candidate management.',
      'Designed and optimized MySQL database schemas with indexing for employee profiles, candidate histories, and payroll data.',
      'Implemented role-based access control (RBAC) and secure session management using JWT and refresh tokens.',
      'Containerized the application stack using Docker and deployed workloads on Google Kubernetes Engine (GKE).',
      'Developed administrative dashboards and management interfaces using Next.js, React, and Tailwind CSS.',
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
        {projects.map((project, index) => {
          const ProjectIcon = project.icon
          return (
            <article
              key={index}
              className="glass-card group hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary-500/20 p-3 rounded-xl text-primary-400">
                      <ProjectIcon className="text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="text-heading-3 text-xl sm:text-2xl">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 flex items-center gap-2 transition-colors group/link text-body-small focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#111827] rounded px-3 py-1.5 bg-primary-500/10 border border-primary-500/20"
                      aria-label={`Visit ${project.title} website (opens in new tab)`}
                    >
                      <span>Live Site</span>
                      <FaExternalLinkAlt size={12} className="group-hover/link:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 flex items-center gap-2 transition-colors group/link text-body-small focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#111827] rounded px-3 py-1.5 bg-primary-500/10 border border-primary-500/20"
                      aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                    >
                      <FaGithub size={14} className="group-hover/link:scale-110 transition-transform" aria-hidden="true" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-body mb-6 text-gray-300 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-[#F9FAFB] mb-3 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-4 bg-primary-500 rounded" aria-hidden="true"></span>
                  Technologies & Architecture
                </h4>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      role="listitem"
                      className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded-full text-xs font-medium border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-[#F9FAFB] mb-3 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-4 bg-primary-500 rounded" aria-hidden="true"></span>
                  Key Technical Contributions
                </h4>
                <ul className="space-y-2" role="list">
                  {project.contributions.map((contribution, contribIndex) => (
                    <li key={contribIndex} className="text-body-small flex items-start group/item">
                      <span className="text-primary-400 mr-2.5 mt-1 group-hover/item:scale-125 transition-transform flex-shrink-0 font-bold" aria-hidden="true">▸</span>
                      <span className="text-gray-300 leading-relaxed">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
