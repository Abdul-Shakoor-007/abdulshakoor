export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-background via-background to-card/30">
      <div className="text-center max-w-3xl">
        <div className="mb-6 inline-block">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              AS
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Senior Full-Stack <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Laravel Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty max-w-2xl mx-auto">
          8+ Years of Excellence
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Building scalable, secure web applications with PHP, Laravel, and modern technologies. Expert in REST APIs, database optimization, team leadership, and cross-platform mobile development with Flutter.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View My Skills
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
