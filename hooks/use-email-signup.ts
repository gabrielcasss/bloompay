"use client"

import { useState } from "react"

export function useEmailSignup() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const openEmailModal = () => setIsEmailModalOpen(true)
  const closeEmailModal = () => setIsEmailModalOpen(false)

  return {
    isEmailModalOpen,
    openEmailModal,
    closeEmailModal,
  }
}



