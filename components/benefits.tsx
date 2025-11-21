export default function Benefits() {
  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Salary range $120,000-$160,000 plus performance bonuses and equity options.',
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.',
    },
    {
      icon: '🏠',
      title: 'Remote Friendly',
      description: 'Fully remote position with optional co-working stipend and quarterly meetups.',
    },
    {
      icon: '🎓',
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and professional development.',
    },
    {
      icon: '🚀',
      title: 'Growth Opportunities',
      description: 'Clear career path with opportunities for leadership and technical specialization.',
    },
    {
      icon: '⏰',
      title: 'Work-Life Balance',
      description: 'Flexible working hours, unlimited PTO, and genuine flexible work culture.',
    },
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">Benefits & Perks</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">{benefit.icon}</div>
            <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
