import { FaBrain, FaDatabase, FaProjectDiagram, FaCheckDouble, FaServer, FaCode, FaRobot } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Agentic AI & Multi-Agent Systems',
    iconName: 'agentic' as const,
    skills: [
      'Multi-Agent Orchestration',
      'LangGraph',
      'Supervisor-Worker Architecture',
      'Tool Calling & Integrations',
      'Conditional Routing',
      'Iterative Reasoning Loops',
      'Session Memory Management',
      'Persistent Memory (Vector Stores)',
    ],
  },
  {
    title: 'RAG & Information Retrieval',
    iconName: 'database' as const,
    skills: [
      'End-to-End RAG Architecture',
      'Hybrid Search (BM25 + Dense)',
      'Multi-Query Retrieval',
      'Cross-Encoder Reranking',
      'Pinecone & ChromaDB',
      'Unstructured.io Parsing',
      'Semantic Chunking & Metadata',
      'OpenAI Dense Embeddings',
    ],
  },
  {
    title: 'AI & LLM Frameworks',
    iconName: 'brain' as const,
    skills: [
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'OpenAI API',
      'Anthropic Claude',
      'Hugging Face',
      'Prompt Evaluation & Engineering',
      'Pydantic Output Validation',
    ],
  },
  {
    title: 'MLOps, Cloud & Infrastructure',
    iconName: 'infrastructure' as const,
    skills: [
      'Apache Airflow (DAG Workflows)',
      'GitHub Actions CI/CD',
      'Docker Containerization',
      'AWS EKS & Kubernetes',
      'AWS S3 Document Storage',
      'Terraform (IaC)',
      'Infrastructure as Code',
    ],
  },
  {
    title: 'Evaluation, Observability & Testing',
    iconName: 'evaluation' as const,
    skills: [
      'RAGAS (Faithfulness & Relevance)',
      'LLM-as-a-Judge Regression Tests',
      'LangSmith Tracing & Profiling',
      'AWS CloudWatch Logging',
      'Grafana Infrastructure Visibility',
      'AI Guardrails',
      'Locust (Concurrent Load Testing)',
      'Postman, Jest & Cypress',
    ],
  },
  {
    title: 'Full Stack Development & Data',
    iconName: 'code' as const,
    skills: [
      'FastAPI & Python',
      'React.js & Next.js',
      'TypeScript & JavaScript (ES6+)',
      'Node.js & Express.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'PostgreSQL, MySQL & MongoDB',
      'RESTful APIs',
      'Git, GitHub & JIRA',
    ],
  },
]

const iconMap = {
  agentic: FaRobot,
  database: FaDatabase,
  brain: FaBrain,
  infrastructure: FaProjectDiagram,
  evaluation: FaCheckDouble,
  code: FaCode,
}

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="section-container relative"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="section-title">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = iconMap[category.iconName]
          return (
            <article
              key={index}
              className="glass-card group hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                    <IconComponent className="text-2xl text-primary-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-heading-3 text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      role="listitem"
                      className="px-3 py-1.5 bg-primary-500/10 text-primary-300 rounded-full text-xs sm:text-sm font-medium border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
