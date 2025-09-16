export interface EmailSignup {
  email: string
  timestamp: string
}

export const EMAIL_STORAGE_KEY = 'bloompay_emails'

export function saveEmailToStorage(email: string): void {
  if (typeof window === 'undefined') return
  
  try {
    const existingEmails = getEmailsFromStorage()
    const newEmail: EmailSignup = {
      email,
      timestamp: new Date().toISOString()
    }
    const updatedEmails = [...existingEmails, newEmail]
    localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(updatedEmails))
  } catch (error) {
    console.error('Failed to save email to localStorage:', error)
  }
}

export function getEmailsFromStorage(): EmailSignup[] {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(EMAIL_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Failed to get emails from localStorage:', error)
    return []
  }
}

export function clearEmailsFromStorage(): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(EMAIL_STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear emails from localStorage:', error)
  }
}



