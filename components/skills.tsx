'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      hoverBg: 'bg-gradient-to-br from-[#7C3AED]/15 to-[#5B21B6]/15',
      borderColor: 'border-[#8B5CF6]/40',
      shadowColor: 'shadow-[#7C3AED]/20',
      skills: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg' },
        { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      hoverBg: 'bg-gradient-to-br from-[#6366F1]/15 to-[#7C3AED]/15',
      borderColor: 'border-[#818CF8]/40',
      shadowColor: 'shadow-[#6366F1]/20',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      hoverBg: 'bg-gradient-to-br from-[#A78BFA]/15 to-[#7C3AED]/15',
      borderColor: 'border-[#C4B5FD]/40',
      shadowColor: 'shadow-[#A78BFA]/20',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'Database Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
      ]
    },
    {
      title: 'Mobile & DevOps',
      icon: '📱',
      hoverBg: 'bg-gradient-to-br from-[#D946EF]/15 to-[#7C3AED]/15',
      borderColor: 'border-[#E879F9]/40',
      shadowColor: 'shadow-[#D946EF]/20',
      skills: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise in full-stack development with 8+ years of professional experience
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative"
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/40 to-purple-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md`} />
                    
                    <div className={`relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 transition-all duration-300 ${hoveredSkill === skill.name ? `${category.hoverBg} ${category.borderColor} shadow-lg ${category.shadowColor}` : ''}`}>
                      {/* Icon container */}
                      <div className="relative">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-20 h-20 relative group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300"
                        />
                      </div>

                      {/* Skill name */}
                      <span className="font-semibold text-center text-sm md:text-base text-foreground group-hover:text-foreground group-hover:font-bold transition-all duration-300">
                        {skill.name}
                      </span>

                      {/* Animated indicator */}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${hoveredSkill === skill.name ? 'w-14 opacity-100 shadow-lg shadow-primary/50' : 'w-0 opacity-0'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-border">
          {[
            { label: 'Years Experience', value: '8+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Tech Stack', value: '20+' },
            { label: 'Clients Served', value: '30+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
