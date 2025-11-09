'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

type FormState = {
  name: string
  email: string
  topic: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialState: FormState = {
  name: '',
  email: '',
  topic: 'Collaboration',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState<string>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const { error } = await response.json()
        throw new Error(error ?? 'Unable to send message.')
      }

      setStatus('success')
      setFeedback('Thank you! Your note has landed in my inbox.')
      setFormData(initialState)
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Oops—something went wrong. Please try again.'
      )
    }
  }

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-medium text-white" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-300 focus:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-white" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-300 focus:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          placeholder="name@email.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-white" htmlFor="topic">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border-white/10 bg-white/5 px-4 py-3 text-slate-100 focus:border-brand-300 focus:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        >
          <option>Collaboration</option>
          <option>Speaking invitation</option>
          <option>Mentorship</option>
          <option>Just saying hi</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-white" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell me about the problem you are solving..."
          className="mt-2 w-full rounded-2xl border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-300 focus:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
      </div>

      <div className="flex flex-col gap-3 text-sm text-slate-300">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
        <p aria-live="polite" className="text-xs text-slate-400">
          I&apos;ll reply within two business days.
        </p>
        {feedback && (
          <p
            role="status"
            className={`text-sm ${
              status === 'success' ? 'text-brand-200' : 'text-rose-300'
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  )
}
