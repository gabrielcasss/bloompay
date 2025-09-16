import Database from 'better-sqlite3'
import { join } from 'path'

export interface EmailSignup {
  id: number
  email: string
  created_at: string
}

let db: Database.Database | null = null

function getDatabase() {
  if (!db) {
    const dbPath = join(process.cwd(), 'data', 'emails.db')
    db = new Database(dbPath)
    
    // Create the emails table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS email_signups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)
  }
  
  return db
}

export function saveEmailSignup(email: string): EmailSignup {
  const database = getDatabase()
  
  const insert = database.prepare(`
    INSERT INTO email_signups (email) 
    VALUES (?)
  `)
  
  const result = insert.run(email)
  
  const select = database.prepare(`
    SELECT * FROM email_signups WHERE id = ?
  `)
  
  return select.get(result.lastInsertRowid) as EmailSignup
}

export function getAllEmailSignups(): EmailSignup[] {
  const database = getDatabase()
  
  const select = database.prepare(`
    SELECT * FROM email_signups 
    ORDER BY created_at DESC
  `)
  
  return select.all() as EmailSignup[]
}

export function getEmailSignupCount(): number {
  const database = getDatabase()
  
  const count = database.prepare(`
    SELECT COUNT(*) as count FROM email_signups
  `).get() as { count: number }
  
  return count.count
}

export function checkEmailExists(email: string): boolean {
  const database = getDatabase()
  
  const select = database.prepare(`
    SELECT 1 FROM email_signups WHERE email = ?
  `)
  
  return !!select.get(email)
}