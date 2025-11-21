export default function Portfolio() {
  const projects = [
    {
      name: 'Phaseline Portal',
      stack: 'Laravel + Vue',
      url: 'https://app.phaseline.net/login',
      description: 'Intelligence analytics platform for real-time situational awareness'
    },
    {
      name: 'Ecoart Travel Site',
      stack: 'Laravel',
      url: 'https://ecoarttravel.com/',
      description: 'Travel booking and management portal'
    },
    {
      name: 'Houston Ecoart Portal',
      stack: 'Laravel',
      url: 'https://houston.ecoarttravel.com/',
      description: 'Regional travel management system'
    },
    {
      name: 'HRM Logon Broadband',
      stack: 'CodeIgniter',
      url: 'http://hrm.lbi.net.pk/',
      description: 'Human Resource Management System'
    },
    {
      name: 'Fundady Portal',
      stack: 'Laravel',
      url: 'http://fundady.com/',
      description: 'Fund management and tracking platform'
    },
    {
      name: 'Complaint Management System',
      stack: 'Laravel',
      url: 'http://cms.logon.com.pk/',
      description: 'Ticket and complaint management system'
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border hover:border-primary bg-card hover:bg-primary/5 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{project.name}</h3>
              <p className="text-sm text-secondary mb-3">{project.stack}</p>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="text-primary text-sm font-medium flex items-center gap-2">
                View Project →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
