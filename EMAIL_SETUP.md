# Email Setup Guide for Contact Form

The contact form is currently set up with a basic API route. To receive emails when someone submits the form, you need to integrate an email service.

## Option 1: Resend (Recommended - Easy & Free)

1. **Sign up at [Resend](https://resend.com)** (free tier: 3,000 emails/month)

2. **Get your API key** from Resend dashboard

3. **Install Resend:**
   ```bash
   npm install resend
   ```

4. **Update `app/api/contact/route.ts`:**

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verified domain
      to: 'BSAIRAM3011@GMAIL.COM',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    })

    return NextResponse.json(
      { success: true, message: 'Thank you for your message! I\'ll get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
```

5. **Add API key to `.env.local`:**
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

## Option 2: EmailJS (Client-Side - No Backend)

1. **Sign up at [EmailJS](https://www.emailjs.com/)** (free tier: 200 emails/month)

2. **Create an email service** in EmailJS dashboard

3. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

4. **Update `components/Contact.tsx`:**

```typescript
import emailjs from '@emailjs/browser'

// Add in useEffect to initialize
useEffect(() => {
  emailjs.init('YOUR_PUBLIC_KEY') // Get from EmailJS dashboard
}, [])

// Update handleSubmit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',    // From EmailJS dashboard
      'YOUR_TEMPLATE_ID',   // From EmailJS dashboard
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'BSAIRAM3011@GMAIL.COM',
      }
    )
    
    setSubmitStatus('success')
    setStatusMessage('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  } catch (error) {
    setSubmitStatus('error')
    setStatusMessage('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

## Option 3: Formspree (Easiest - No Code Changes)

1. **Sign up at [Formspree](https://formspree.io/)** (free tier: 50 submissions/month)

2. **Create a new form** and get your form endpoint

3. **Update form action in `components/Contact.tsx`:**

```typescript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit}
>
  {/* Add hidden input for Formspree */}
  <input type="hidden" name="_to" value="BSAIRAM3011@GMAIL.COM" />
  {/* Rest of form fields */}
</form>
```

## Option 4: Gmail SMTP with Nodemailer

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Update `app/api/contact/route.ts`** with Gmail SMTP configuration

3. **Add to `.env.local`:**
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

## Current Setup

The current setup uses a basic API route that logs the message. To receive actual emails, choose one of the options above.

**Recommended:** Use **Resend** for production (best free tier, reliable, modern API) or **EmailJS** for quick setup without backend changes.

