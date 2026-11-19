import { FaGraduationCap, FaUser } from 'react-icons/fa'

export default function About() {
  return (
    <section 
      id="about" 
      className="section-container relative"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="section-title">About Me</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <article className="glass-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-primary-500/20 p-4 rounded-xl mr-4">
                <FaGraduationCap className="text-primary-400 text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-heading-3">Education</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-semibold gradient-text">
                Jawaharlal Nehru Technological University, Hyderabad
              </p>
              <p className="text-body">
                Bachelor of Technology in Electronics and Communication Engineering
              </p>
              <p className="text-body-small">Hyderabad, India • 2019 – 2023</p>
            </div>
          </article>

          {/* Professional Summary Card */}
          <article className="glass-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-primary-500/20 p-4 rounded-xl mr-4">
                <FaUser className="text-primary-400 text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-heading-3">Professional Summary</h3>
            </div>
            <div className="space-y-4">
              <p className="text-body">
                I am an <span className="text-[#F9FAFB] font-semibold">AI Engineer and Full Stack Developer</span> with experience building end-to-end Generative AI applications, Retrieval-Augmented Generation (RAG) systems, and multi-agent workflows using LangGraph.
              </p>
              <p className="text-body">
                My technical expertise spans document processing with Unstructured.io, semantic chunking, dense/hybrid retrieval (BM25 + vector search), multi-query expansion, Cross-Encoder reranking, vector databases (Pinecone, ChromaDB), and automated LLM evaluation with RAGAS and LLM-as-a-Judge.
              </p>
              <p className="text-body">
                I specialize in developing scalable AI microservices using Python, FastAPI, Docker, and AWS EKS, backed by workflow orchestration (Apache Airflow), CI/CD automation (GitHub Actions), infrastructure as code (Terraform), and robust observability using LangSmith, AWS CloudWatch, and Grafana.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

