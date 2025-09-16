"use client"

import { createContext, useContext, ReactNode } from "react"
import { useEmailSignup } from "@/hooks/use-email-signup"
import { EmailSignupModal } from "@/components/email-signup-modal"

interface EmailSignupContextType {
  openEmailModal: () => void
}

const EmailSignupContext = createContext<EmailSignupContextType | undefined>(undefined)

export function useEmailSignupContext() {
  const context = useContext(EmailSignupContext)
  if (!context) {
    throw new Error("useEmailSignupContext must be used within EmailSignupProvider")
  }
  return context
}

interface EmailSignupProviderProps {
  children: ReactNode
}

export function EmailSignupProvider({ children }: EmailSignupProviderProps) {
  const { isEmailModalOpen, openEmailModal, closeEmailModal } = useEmailSignup()

  return (
    <EmailSignupContext.Provider value={{ openEmailModal }}>
      {children}
      <EmailSignupModal isOpen={isEmailModalOpen} onClose={closeEmailModal} />
    </EmailSignupContext.Provider>
  )
}

