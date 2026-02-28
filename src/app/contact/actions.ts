'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormState = {
    success: boolean
    error: string | null
}

export async function sendContactEmail(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Server-side validation
    if (!name || !email || !message) {
        return { success: false, error: 'Please fill in all required fields.' }
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { success: false, error: 'Please enter a valid email address.' }
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'madonnaschoolgh@gmail.com'

    try {
        await resend.emails.send({
            from: `Madonna School Contact <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
            to: recipientEmail,
            replyTo: email,
            subject: `[Contact Form] ${subject || 'General Inquiry'}`,
            html: `
                <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #051324; padding: 32px; border-radius: 16px 16px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Message</h1>
                    </div>
                    <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; vertical-align: top; width: 120px;">Name</td>
                                <td style="padding: 12px 0; color: #111827;">${escapeHtml(name)}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Email</td>
                                <td style="padding: 12px 0; color: #111827;"><a href="mailto:${escapeHtml(email)}" style="color: #0ea5e9;">${escapeHtml(email)}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Subject</td>
                                <td style="padding: 12px 0; color: #111827;">${escapeHtml(subject || 'General Inquiry')}</td>
                            </tr>
                        </table>
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                        <h3 style="color: #374151; margin: 0 0 12px 0;">Message</h3>
                        <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; color: #374151; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
                    </div>
                </div>
            `,
        })

        return { success: true, error: null }
    } catch (err: any) {
        console.error('Failed to send email:', err)
        return {
            success: false,
            error: 'Something went wrong sending your message. Please try again later.',
        }
    }
}

/** Prevent XSS in email HTML */
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}
