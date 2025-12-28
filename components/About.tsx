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
                Bachelor of Technology in Electronics Communication Engineering
              </p>
              <p className="text-body-small">2019 – 2023</p>
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
                I'm a passionate Full Stack Developer with experience in building scalable web applications
                using modern technologies. I specialize in React, Next.js, Node.js, and Express.js, with
                expertise in both frontend and backend development.
              </p>
              <p className="text-body">
                My experience includes developing responsive user interfaces, building RESTful APIs,
                implementing authentication systems, and deploying containerized applications. I'm
                proficient in managing application state with Redux, optimizing performance, and
                following Agile methodologies.
              </p>
              <p className="text-body">
                I'm always eager to learn new technologies and take on challenging projects that push
                the boundaries of what's possible in web development.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

