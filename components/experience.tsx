export default function Experience() {
  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Real Versatile Technologies',
      period: 'FEB 2022 - PRESENT',
      description: 'Lead web development and delivery for intelligence & analytics platforms. Supervise 4-member development team managing project timelines, resource allocation, and quality assurance.',
      highlights: ['Intelligence Analytics Platforms', 'Flutter Mobile Apps', 'Team Leadership', 'CI/CD with GitHub Actions', 'Query Optimization (35% improvement)', 'Technical Documentation'],
    },
    {
      role: 'Senior PHP/Laravel/CI Developer',
      company: 'Logon Broadband',
      period: 'DEC 2019 - JANUARY 2022',
      description: 'Developed and maintained 5+ internal SaaS tools serving 200+ employees. Designed and secured RESTful APIs using Laravel Passport OAuth2 for IMD/TMD integrations.',
      highlights: ['SaaS Development', 'API Security', 'Legacy Migration', 'Team Training', 'Git Workflows'],
    },
    {
      role: 'PHP/Laravel Developer',
      company: 'ANSH IT TECH',
      period: 'SEP 2017 - NOV 2019',
      description: 'Delivered 8+ dynamic websites including e-commerce and corporate portals using Laravel with responsive Bootstrap UIs. Collaborated with UI/UX designers on Figma/PSD mockups.',
      highlights: ['E-Commerce Development', 'Responsive Design', 'Livewire Components', 'UI/UX Collaboration'],
    },
    {
      role: 'Faculty - Instructor',
      company: 'Aptech Computer Education',
      period: 'MARCH 2017 - AUG 2017',
      description: 'Instructed 100+ students in PHP, .NET, and Android development. Conducted seminars on emerging technologies and trained fellow instructors.',
      highlights: ['Technical Education', 'Curriculum Development', 'Instructor Training'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-border hover:border-primary hover:bg-background transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold px-4 py-1 bg-primary/10 text-primary rounded-full w-fit whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span key={highlight} className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
