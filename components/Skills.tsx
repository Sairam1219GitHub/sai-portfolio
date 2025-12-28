import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend',
    iconName: 'code' as const,
    skills: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
      'jQuery',
      'Bootstrap',
      'Webpack',
      'DOM',
    ],
  },
  {
    title: 'Backend',
    iconName: 'server' as const,
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
      'Async/Await',
      'Promises',
    ],
  },
  {
    title: 'Databases',
    iconName: 'database' as const,
    skills: [
      'MySQL',
      'MongoDB',
      'Database Design',
      'CRUD Operations',
      'Query Optimization',
    ],
  },
  {
    title: 'DevOps & Tools',
    iconName: 'tools' as const,
    skills: [
      'Docker',
      'Kubernetes',
      'GKE',
      'AWS',
      'Git',
      'CI/CD',
      'JIRA',
      'Agile/Scrum',
      'Jest',
      'Cypress',
      'Postman',
    ],
  },
]

const iconMap = {
  code: FaCode,
  server: FaServer,
  database: FaDatabase,
  tools: FaTools,
}

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="section-container relative"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="section-title">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = iconMap[category.iconName]
          return (
            <article
              key={index}
              className="glass-card group hover:border-primary-500/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-500/20 p-4 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <IconComponent className="text-2xl text-primary-400" aria-hidden="true" />
                </div>
                <h3 className="text-heading-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5" role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    role="listitem"
                    className="px-4 py-2 bg-primary-500/10 text-primary-300 rounded-full text-sm font-medium border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

