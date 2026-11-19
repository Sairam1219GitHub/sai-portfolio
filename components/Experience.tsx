import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaTasks, FaChartLine } from 'react-icons/fa'

const experiences = [
  {
    company: 'Innovapath IT Solutions',
    location: 'Hyderabad, India',
    position: 'AI Engineer',
    period: 'Feb 2026 – Present',
    impact: [
      'Architected end-to-end RAG assistant & stateful multi-agent workflows using LangGraph with sub-second retrieval',
      'Automated evaluation pipelines using RAGAS & LLM-as-a-Judge regression tests in GitHub Actions CI/CD',
      'Delivered low-latency FastAPI inference microservices on AWS EKS with CloudWatch & Grafana observability',
    ],
    technologies: [
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'Python',
      'FastAPI',
      'Pinecone',
      'RAGAS',
      'Apache Airflow',
      'Docker',
      'AWS EKS',
      'AWS S3',
      'Terraform',
      'LangSmith',
      'AWS CloudWatch',
      'Grafana',
      'Locust',
    ],
    responsibilities: [
      'Architected and developed an end-to-end Retrieval-Augmented Generation (RAG) assistant using LangChain and LlamaIndex to enable contextual question answering across document-based knowledge sources.',
      'Implemented document ingestion and preprocessing pipelines using Unstructured.io for document parsing, extraction, content normalization, and semantic chunking.',
      'Developed automated document processing workflows using Apache Airflow DAGs to orchestrate ingestion, extraction, and chunking for scheduled and event-driven updates.',
      'Implemented embedding generation using OpenAI embedding models and integrated Pinecone vector database for dense semantic retrieval.',
      'Implemented metadata-based filtering to support context-aware vector retrieval.',
      'Engineered hybrid retrieval pipelines combining BM25-based lexical search and dense vector similarity search, followed by Cross-Encoder reranking.',
      'Implemented multi-query retrieval strategies to expand query variations and improve retrieval coverage across knowledge sources.',
      'Designed and implemented stateful multi-agent workflows using LangGraph, incorporating supervisor-worker orchestration, conditional routing, and iterative reasoning loops.',
      'Integrated tool-calling capabilities to enable agents to interact with external services and execute multi-step workflows.',
      'Implemented short-term conversational memory using session and context management.',
      'Implemented persistent long-term conversational memory using vector stores to retain context across multiple sessions.',
      'Implemented structured output validation using Pydantic and basic error handling for AI application workflows.',
      'Implemented automated RAG evaluation pipelines using RAGAS to assess faithfulness, answer relevance, and context precision and recall.',
      'Integrated LLM-as-a-Judge evaluation and regression testing into GitHub Actions CI/CD workflows to validate AI application changes before deployment.',
      'Conducted load and performance testing using Locust to simulate concurrent user queries against FastAPI endpoints, measuring throughput, p95/p99 latency, and response performance.',
      'Developed asynchronous REST APIs using Python and FastAPI to serve RAG and LLM-powered application capabilities.',
      'Containerized AI microservices using Docker and provisioned AWS infrastructure using Terraform, including S3 document storage, EKS clusters, and IAM policies.',
      'Automated build, testing, and deployment workflows using GitHub Actions.',
      'Integrated LangSmith for LLM execution tracing, token usage profiling, latency tracking, and debugging.',
      'Used AWS CloudWatch and Grafana for application logging, infrastructure monitoring, and operational visibility.',
    ],
  },
  {
    company: 'Innovapath IT Solutions',
    location: 'Hyderabad, India',
    position: 'Software Developer',
    period: 'Dec 2023 – Jan 2026',
    impact: [
      'Developed scalable full-stack web applications delivering high availability and rapid load times',
      'Built secure authentication & authorization systems using JWT, OAuth, bcrypt, and role-based access control (RBAC)',
      'Streamlined deployment pipelines using Docker containerization on Google Kubernetes Engine (GKE)',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'Redux Toolkit',
      'Tailwind CSS',
      'Docker',
      'Kubernetes (GKE)',
      'JIRA',
      'Git',
    ],
    responsibilities: [
      'Developed scalable full-stack web applications using React.js, Next.js, Node.js, Express.js, and TypeScript.',
      'Built responsive and interactive user interfaces using React, Tailwind CSS, HTML5, and CSS3.',
      'Developed RESTful APIs and backend microservices using Node.js and Express.js, integrating MySQL databases.',
      'Implemented authentication and authorization using JWT, OAuth, bcrypt, and role-based access control (RBAC).',
      'Managed application state using Redux Toolkit to ensure predictable data flow and consistent application behavior.',
      'Optimized frontend performance using code splitting, lazy loading, memoization, and Webpack configurations.',
      'Containerized applications using Docker and supported scalable application deployments on Google Kubernetes Engine (GKE).',
      'Participated in Agile/Scrum development, sprint planning, code reviews, and project tracking using JIRA and Git.',
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
          
          <div className="space-y-12">
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
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-heading-3">{exp.position}</h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-300 border border-primary-500/30 w-fit">
                        <FaCalendarAlt className="text-xs" aria-hidden="true" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xl gradient-text font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-body-small mb-4">
                      <FaMapMarkerAlt className="text-sm text-primary-400" aria-hidden="true" />
                      <span>{exp.location}</span>
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
                        className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded-full text-xs font-medium border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-heading font-semibold text-[#F9FAFB] mb-3 text-sm flex items-center gap-2">
                    <FaTasks className="text-primary-400 text-sm" aria-hidden="true" />
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2.5" role="list">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-body-small flex items-start group">
                        <span className="text-primary-400 mr-3 mt-1 group-hover:scale-125 transition-transform flex-shrink-0 font-bold" aria-hidden="true">▸</span>
                        <span className="text-gray-300 leading-relaxed">{responsibility}</span>
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
