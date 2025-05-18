'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { CalendlyButton } from '@/components/calendly-button'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.details || 'Failed to send message')

      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error: any) {
      console.error('Form submission error:', error)
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'Failed to send message. Please try again.'
      })
    }
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Aquí puedes pegar todo tu JSX del formulario y secciones como lo tenías */}
    </main>
  )
}
