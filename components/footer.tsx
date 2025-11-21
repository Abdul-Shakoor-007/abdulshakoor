'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-shakoor-mallah-634644132/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:Abdulshakoorm007@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-card/30 backdrop-blur-sm">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-0.5">
                <div className="w-full h-full rounded-lg bg-background flex items-center justify-center text-primary font-bold">
                  AS
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Abdul Shakoor</h3>
                <p className="text-xs text-muted-foreground">Senior Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building scalable web solutions with Laravel and modern frontend frameworks. Passionate about clean code and user experience.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#portfolio' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/50 ${social.color}`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              Located in Pakistan<br />Open to remote opportunities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Abdul Shakoor. All rights reserved. | Made with passion using Next.js & Laravel
          </p>

          {/* Scroll to top button */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}
