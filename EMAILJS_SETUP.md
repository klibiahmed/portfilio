# EmailJS Setup Instructions

Follow these steps to configure EmailJS so your contact form sends emails to your inbox:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with your Gmail account (ahmedklibi10@gmail.com)
   - Allow EmailJS to send emails on your behalf
4. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## 3. Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** Portfolio Contact Form

**Template Content:**
```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

**Template Variables:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Ahmed Klibi)

4. Set the **To Email** field to: `ahmedklibi10@gmail.com`
5. Click **Save**
6. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxx`)
3. Copy this key

## 5. Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

Replace:
- `service_xxxxxxx` with your Service ID from step 2
- `template_xxxxxxx` with your Template ID from step 3
- `xxxxxxxxxxxxxx` with your Public Key from step 4

## 6. Test Your Contact Form

1. Save the `.env` file
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Go to your portfolio website
4. Navigate to the Contact section
5. Fill out the form and click "Send Message"
6. Check your email inbox (ahmedklibi10@gmail.com) for the message

## Important Notes

- **Free Plan Limits:** EmailJS free plan allows 200 emails per month
- **Security:** Never commit your `.env` file to Git (it's already in `.gitignore`)
- **Spam Protection:** Consider adding reCAPTCHA if you get spam submissions
- **Email Delivery:** Emails may take 1-2 minutes to arrive

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all three credentials are correct in `.env`
3. Make sure you restarted the dev server after updating `.env`
4. Check EmailJS dashboard for error logs
5. Verify your Gmail account is properly connected in EmailJS

## Alternative Email Services

If you prefer not to use Gmail, EmailJS also supports:
- Outlook
- Yahoo
- Custom SMTP
- SendGrid
- Mailgun

Just select a different service in step 2.
