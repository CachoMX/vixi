'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    const result = await subscribeToNewsletter(formData)
    
    if (result.success) {
      setStatus('success')
      setMessage('Thank you for subscribing!')
    } else {
      setStatus('error')
      setMessage(result.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <form action={handleSubmit} className="space-y-2">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        required
      />
      <Button 
        className="w-full bg-primary-blue" 
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  )
}