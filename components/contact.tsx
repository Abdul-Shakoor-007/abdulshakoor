'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle, Linkedin } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:Abdulshakoorm007@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Mail className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">Abdulshakoorm007@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+923323037905"
            className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Phone className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">+92-03323037905</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-shakoor-mallah-634644132/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Linkedin className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-primary/5">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">Gulshan-e-Iqbal Block 2, Pakistan</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-32 resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
