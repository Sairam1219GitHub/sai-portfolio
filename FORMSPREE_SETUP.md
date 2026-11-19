# Formspree Setup Guide

## ✅ Quick Setup (2 minutes)

### Step 1: Sign Up for Formspree

1. Go to **https://formspree.io/**
2. Click **"Sign Up"** (or "Get Started")
3. Sign up with your email (use: **sairamb3917@gmail.com**)
4. Verify your email address

### Step 2: Create a New Form

1. After logging in, click **"New Form"** or **"Create Form"**
2. Fill in the form details:
   - **Form Name**: "Portfolio Contact Form"
   - **Email to receive submissions**: `sairamb3917@gmail.com`
   - **Form Type**: "Contact Form" or "Custom"
3. Click **"Create Form"**

### Step 3: Get Your Form ID

1. After creating the form, you'll see your **Form Endpoint**
2. It will look like: `https://formspree.io/f/xrbpkjqz`
3. Copy the **form ID** (the part after `/f/`), for example: `xrbpkjqz`

### Step 4: Add Form ID to Your Project

**Option A: Using Environment Variable (Recommended)**

1. Create a file named `.env.local` in your project root (if it doesn't exist)
2. Add this line:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xrbpkjqz
   ```
   (Replace `xrbpkjqz` with your actual form ID)

3. Restart your dev server:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

**Option B: Direct Update (Quick Test)**

1. Open `components/Contact.tsx`
2. Find this line:
   ```typescript
   const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORMSPREE_FORM_ID'
   ```
3. Replace `'YOUR_FORMSPREE_FORM_ID'` with your actual form ID:
   ```typescript
   const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xrbpkjqz'
   ```

### Step 5: Test the Form

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email at **sairamb3917@gmail.com** - you should receive the message!

## 📧 How It Works

1. User fills out the form on your portfolio
2. Form submits to Formspree's endpoint
3. Formspree validates and processes the submission
4. **You receive an email** at sairamb3917@gmail.com with:
   - Name
   - Email
   - Message
   - Subject: "Portfolio Contact: [Name]"

## 🎯 Formspree Features

- ✅ **Free Tier**: 50 submissions/month
- ✅ **Spam Protection**: Built-in
- ✅ **Email Notifications**: Automatic
- ✅ **No Backend Required**: Works client-side
- ✅ **Easy Setup**: Just need form ID

## 🔒 Security

Formspree handles:
- Spam protection
- Rate limiting
- Email validation
- Secure submissions

## 📊 Upgrade Options

If you need more than 50 submissions/month:
- **Starter Plan**: $10/month - 1,000 submissions
- **Pro Plan**: $25/month - 5,000 submissions

## 🐛 Troubleshooting

**Form not sending?**
- Check that your form ID is correct
- Make sure you've verified your email with Formspree
- Check browser console (F12) for errors

**Not receiving emails?**
- Check spam folder
- Verify email address in Formspree settings
- Check Formspree dashboard for submission logs

**Environment variable not working?**
- Make sure `.env.local` is in the project root
- Restart the dev server after adding the variable
- Use `NEXT_PUBLIC_` prefix for client-side variables

## ✅ You're Done!

Once you add your Formspree form ID, the contact form will automatically send emails to you!

