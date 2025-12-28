# 🚀 Quick Formspree Setup (2 Minutes)

## Step 1: Get Your Formspree Form ID

1. **Go to:** https://formspree.io/
2. **Sign up** with your email (BSAIRAM3011@GMAIL.COM)
3. **Verify your email** (check inbox)
4. **Click "New Form"**
5. **Set email to:** BSAIRAM3011@GMAIL.COM
6. **Click "Create Form"**
7. **Copy your Form ID** (looks like: `xrbpkjqz` or `abc123`)

## Step 2: Add Form ID to Your Project

**Create `.env.local` file in your project root:**

```bash
# In your project root (C:\Users\ramsa\OneDrive\Desktop\my_portfolio)
# Create a file named: .env.local
```

**Add this line to `.env.local`:**
```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

**Replace `your_form_id_here` with your actual Formspree form ID**

## Step 3: Restart Your Server

```bash
# Stop the server (Ctrl+C)
npm run dev
```

## ✅ Done!

Now when someone fills out your contact form, you'll receive emails at **BSAIRAM3011@GMAIL.COM**!

## 🧪 Test It

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email inbox!

## 📝 Example

If your Formspree form ID is `xrbpkjqz`, your `.env.local` should look like:

```
NEXT_PUBLIC_FORMSPREE_ID=xrbpkjqz
```

That's it! The form is now fully functional! 🎉

