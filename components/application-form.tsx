'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setLoading(false)
    setFormData({ name: '', email: '', phone: '', portfolio: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 rounded-2xl p-8 space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-balance">Apply Now</h3>
        <p className="text-sm text-muted-foreground">Join our engineering team today</p>
      </div>

      {submitted ? (
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-2">
          <p className="font-semibold text-green-900 dark:text-green-100">✓ Application Submitted!</p>
          <p className="text-sm text-green-700 dark:text-green-300">We'll review your application and get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Abdul Shakoor"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Portfolio / GitHub</label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://github.com/you"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you'd be great for this role..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⟳</span> Submitting...
              </span>
            ) : (
              'Submit Application'
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
