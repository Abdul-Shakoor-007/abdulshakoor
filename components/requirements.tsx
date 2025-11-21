export default function Requirements() {
  const requirements = [
    'Expert-level knowledge of Laravel framework and PHP',
    'Strong understanding of RESTful API design and implementation',
    'Proficiency with Vue.js, React, or similar modern JavaScript frameworks',
    'Experience with MySQL/PostgreSQL database optimization',
    'Solid grasp of software design patterns and SOLID principles',
    'Familiarity with Docker, Redis, and message queues',
    'Version control (Git) and CI/CD pipelines expertise',
    'Experience with cloud platforms (AWS, GCP, or Azure)',
  ]

  const nice_to_have = [
    'Open source contributions',
    'Experience with TDD and automated testing',
    'Knowledge of microservices architecture',
    'Real-time application development (WebSockets)',
  ]

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Requirements */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Requirements</h3>
          </div>
          <ul className="space-y-3">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                <span className="text-muted-foreground leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nice to Have */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Nice to Have</h3>
          </div>
          <ul className="space-y-3">
            {nice_to_have.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="text-accent font-bold mt-1 flex-shrink-0">→</span>
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
