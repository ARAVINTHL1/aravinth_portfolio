# EmailJS Setup Instructions

To enable OTP email functionality for resume downloads, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to Email Services page
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to Email Templates page
2. Click "Create New Template"
3. Use this template content:

```
Subject: Resume Download OTP - Aravinth's Portfolio

Hello {{to_name}},

Thank you for your interest in downloading my resume!

Your One-Time Password (OTP) is: {{otp}}

This OTP is valid for 10 minutes.

If you didn't request this, please ignore this email.

Best regards,
Aravinth Loganathan
```

4. Make sure your template has these variables:
   - `{{to_email}}` - Recipient email
   - `{{to_name}}` - Recipient name
   - `{{otp}}` - The 6-digit OTP code

5. Note down your **Template ID**

## 4. Get Public Key
1. Go to Account page
2. Find your **Public Key** (also called User ID)

## 5. Update Contact.tsx
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

## 6. Test the Functionality
1. Save the file
2. Refresh your portfolio
3. Click "Download Resume"
4. Enter an email address
5. Check your email for the OTP
6. Enter the OTP to download the resume

## Important Notes
- EmailJS free tier allows 200 emails/month
- OTPs are valid for the current session only
- For production, consider using a backend service for better security
- Never commit your EmailJS credentials to public repositories

## Alternative: Backend Implementation
For better security, you can implement a backend API:
1. Create a Node.js/Express server
2. Use Nodemailer or SendGrid for email sending
3. Store OTPs in Redis with expiration
4. Validate OTPs server-side
