'use client'

import { socialContacts } from '@/data/contact-info'
import { SocialButton } from './social-button'
import { Locale } from '@/types/globals'

interface ContactButtonsProps {
  locale: Locale
  layout?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
}

export function ContactButtons({
  locale,
  layout = 'horizontal',
  size = 'md'
}: ContactButtonsProps) {
  const layoutClasses = layout === 'horizontal'
    ? 'flex flex-wrap gap-4 justify-center'
    : 'flex flex-col gap-4'

  return (
    <div className={layoutClasses}>
      {socialContacts.map((contact) => (
        <SocialButton
          key={contact.type}
          contact={contact}
          locale={locale}
          size={size}
        />
      ))}
    </div>
  )
}
