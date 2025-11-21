export default function JobDescription() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Full-Stack Laravel Developer</h2>
            <p className="text-lg text-muted-foreground mt-2">Build the future of web applications</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {[
            { label: 'Experience', value: '5+ years' },
            { label: 'Type', value: 'Full-time' },
            { label: 'Location', value: 'Remote' },
            { label: 'Salary', value: '$120-160K' },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-xl p-4 border border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="text-lg font-bold text-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold text-balance">About This Role</h3>
        <p className="text-muted-foreground leading-relaxed">
          We are looking for an experienced Full-Stack Laravel Developer to join our team and drive innovation in our backend and frontend systems. You'll work with cutting-edge technologies, collaborate with talented engineers, and have the opportunity to impact products used by millions.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          In this role, you will architect scalable APIs, optimize database queries, develop responsive user interfaces, and mentor junior developers. Your expertise in Laravel, modern JavaScript frameworks, and database design will be crucial to our success.
        </p>
      </div>
    </section>
  )
}
