export const socialUtils = {
  whatsapp: (phone: string, message?: string) => {
    const encodedMessage = message ? encodeURIComponent(message) : ''
    return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ''}`
  },

  instagram: (username: string) => {
    const cleanUsername = username.replace('@', '')
    return `https://instagram.com/${cleanUsername}`
  },

  email: (email: string, subject?: string, body?: string) => {
    const params = new URLSearchParams()
    if (subject) params.append('subject', subject)
    if (body) params.append('body', body)

    return `mailto:${email}${params.toString() ? `?${params.toString()}` : ''}`
  }
}
