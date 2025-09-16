import { saveEmailSignup, getAllEmailSignups, checkEmailExists, getEmailSignupCount } from '../lib/database'

async function testDatabase() {
  console.log('🧪 Testing database functionality...\n')
  
  try {
    // Test 1: Save a new email
    console.log('📧 Test 1: Saving new email...')
    const testEmail = 'test@example.com'
    const saved = saveEmailSignup(testEmail)
    console.log('✅ Email saved:', saved)
    
    // Test 2: Check if email exists
    console.log('\n🔍 Test 2: Checking if email exists...')
    const exists = checkEmailExists(testEmail)
    console.log('✅ Email exists:', exists)
    
    // Test 3: Try to save duplicate email (should fail)
    console.log('\n🚫 Test 3: Trying to save duplicate email...')
    try {
      saveEmailSignup(testEmail)
      console.log('❌ ERROR: Duplicate email was saved!')
    } catch (error) {
      console.log('✅ Correctly prevented duplicate:', error.message)
    }
    
    // Test 4: Get all emails
    console.log('\n📋 Test 4: Getting all emails...')
    const allEmails = getAllEmailSignups()
    console.log('✅ All emails:', allEmails)
    
    // Test 5: Get email count
    console.log('\n📊 Test 5: Getting email count...')
    const count = getEmailSignupCount()
    console.log('✅ Email count:', count)
    
    console.log('\n🎉 All database tests passed!')
    
  } catch (error) {
    console.error('❌ Database test failed:', error)
    process.exit(1)
  }
}

testDatabase()