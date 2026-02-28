'use client'

import { useActionState, useRef, useEffect } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { sendContactEmail, type ContactFormState } from '@/app/contact/actions'

const initialState: ContactFormState = {
    success: false,
    error: null,
}

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    // Reset form on success
    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset()
        }
    }, [state.success])

    return (
        <form ref={formRef} action={formAction} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <label htmlFor="contact-name" className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">
                        Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium outline-none"
                        placeholder="John Doe"
                        disabled={isPending}
                    />
                </div>
                <div className="space-y-3">
                    <label htmlFor="contact-email" className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">
                        Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium outline-none"
                        placeholder="john@example.com"
                        disabled={isPending}
                    />
                </div>
            </div>
            <div className="space-y-3">
                <label htmlFor="contact-subject" className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Subject</label>
                <select
                    id="contact-subject"
                    name="subject"
                    className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium appearance-none outline-none"
                    disabled={isPending}
                >
                    <option>General Inquiry</option>
                    <option>Admission Support</option>
                    <option>Curriculum Questions</option>
                    <option>Alumni Affairs</option>
                </select>
            </div>
            <div className="space-y-3">
                <label htmlFor="contact-message" className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">
                    Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium resize-none outline-none"
                    placeholder="How can we help you?"
                    disabled={isPending}
                />
            </div>

            {/* Status Messages */}
            {state.success && (
                <div className="flex items-center gap-3 p-5 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-200 font-bold">
                    <CheckCircle2 size={22} className="flex-shrink-0" />
                    Your message has been sent successfully! We&apos;ll get back to you soon.
                </div>
            )}
            {state.error && (
                <div className="flex items-center gap-3 p-5 bg-red-50 text-red-700 rounded-2xl border border-red-200 font-bold">
                    <AlertCircle size={22} className="flex-shrink-0" />
                    {state.error}
                </div>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="w-full lg:w-max px-12 py-6 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 group"
            >
                {isPending ? (
                    <>Sending... <Loader2 size={20} className="animate-spin" /></>
                ) : (
                    <>Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>
                )}
            </button>
        </form>
    )
}
