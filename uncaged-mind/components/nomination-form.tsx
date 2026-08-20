'use client'

import type { FormEvent } from 'react'

const fieldBase =
  'w-full rounded-md border border-border bg-input/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/40'

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode
  required?: boolean
  htmlFor: string
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm text-foreground/85">
      {children}
      {required && <span className="ml-1 text-gold">*</span>}
    </label>
  )
}

export function NominationForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-card/80 to-background/40 px-6 py-10 shadow-[0_0_60px_-20px_rgba(212,165,58,0.25)] sm:px-10 lg:px-16">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.35em] text-gold">
            Nomination Details
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold/50" />
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" required>
                Your Name
              </Label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className={fieldBase}
              />
            </div>
            <div>
              <Label htmlFor="email" required>
                Your Email
              </Label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className={fieldBase}
              />
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="nominee" required>
              Who are you nominating?
            </Label>
            <input
              id="nominee"
              name="nominee"
              type="text"
              required
              placeholder="Name of the guest or yourself"
              className={fieldBase}
            />
          </div>

          <div className="mt-6">
            <Label htmlFor="why" required>
              Why do you think this person would be a great guest on Uncaged Mind?
            </Label>
            <textarea
              id="why"
              name="why"
              required
              rows={4}
              placeholder="Tell us what makes their story, experience, or perspective important."
              className={`${fieldBase} resize-y`}
            />
          </div>

          <div className="mt-6">
            <Label htmlFor="background">Guest&apos;s Background / Expertise</Label>
            <textarea
              id="background"
              name="background"
              rows={3}
              placeholder="Share a bit about their background, profession, achievements, or areas of expertise."
              className={`${fieldBase} resize-y`}
            />
          </div>

          <div className="mt-6">
            <Label htmlFor="links">Links (Website / Social Media / Work)</Label>
            <input
              id="links"
              name="links"
              type="text"
              placeholder="Add any relevant links (LinkedIn, website, portfolio, social handles, etc.)"
              className={fieldBase}
            />
          </div>

          <div className="mt-6">
            <Label htmlFor="notes">Anything else we should know?</Label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Share any additional details that could help us know them better."
              className={`${fieldBase} resize-y`}
            />
          </div>

          <div className="mt-9 flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-gradient-to-b from-gold-light to-gold px-10 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-background shadow-[0_0_30px_-6px_rgba(212,165,58,0.6)] transition-transform hover:scale-[1.02] active:scale-100"
            >
              Submit Nomination
            </button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <LockIcon className="h-3.5 w-3.5 text-gold/70" />
            <span className="max-w-md">
              Thank you! Your nomination helps us create meaningful conversations
              that matter.
            </span>
          </p>
        </form>
      </div>
    </section>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
