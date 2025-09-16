"use client"

import { useState, useEffect } from "react"
import { getEmailsFromStorage, clearEmailsFromStorage, EmailSignup } from "@/lib/email-storage"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Download, Mail } from "lucide-react"
import { toast } from "sonner"

export default function AdminEmailsPage() {
  const [emails, setEmails] = useState<EmailSignup[]>([])

  useEffect(() => {
    setEmails(getEmailsFromStorage())
  }, [])

  const handleClearEmails = () => {
    clearEmailsFromStorage()
    setEmails([])
    toast.success("All emails cleared")
  }

  const handleDownloadEmails = () => {
    const csvContent = [
      "Email,Timestamp",
      ...emails.map(email => `${email.email},${email.timestamp}`)
    ].join("\n")
    
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `bloompay-emails-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success("Emails downloaded as CSV")
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Email Signups</h1>
            <p className="text-muted-foreground mt-2">
              Manage email signups collected from the landing page
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleDownloadEmails} disabled={emails.length === 0}>
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
            <Button variant="destructive" onClick={handleClearEmails} disabled={emails.length === 0}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {emails.length === 0 ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No emails collected yet</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            emails.map((email, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium">{email.email}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(email.timestamp).toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {emails.length > 0 && (
          <div className="mt-8 text-center text-muted-foreground">
            <p>Total emails: {emails.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}



