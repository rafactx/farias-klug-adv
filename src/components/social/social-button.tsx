'use client'

import { SocialContact } from '@/types/social'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface SocialButtonProps {
  contact: SocialContact
  locale: string
  size?: 'sm' | 'md' | 'lg'
}

export function SocialButton({ contact, locale, size = 'md' }: SocialButtonProps) {
  const handleClick = () => {
    window.open(contact.value, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      onClick={handleClick}
      className={`${contact.color} text-white flex items-center gap-2 transition-all duration-300 hover:scale-105`}
      size={size}
    >
      <ExternalLink className="w-4 h-4" />
      {contact.label[locale as keyof typeof contact.label]}
    </Button>
  )
}
