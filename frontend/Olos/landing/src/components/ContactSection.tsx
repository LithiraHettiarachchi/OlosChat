"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("idle");

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        const SERVICE_ID = "service_958bouj"; // e.g., service_xyz
        const TEMPLATE_ID = "template_tyhm48a"; // e.g., template_abc
        const PUBLIC_KEY = "HYQy6I50QCWvzw4Cm"; // e.g., user_123

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus("success");
                    setFormData({ name: "", email: "", message: "" });
                    // Reset status after 5 seconds
                    setTimeout(() => setStatus("idle"), 5000);
                }, (error) => {
                    console.error("EmailJS Error:", error);
                    setErrorMessage(error.text || JSON.stringify(error) || "Unknown error");
                    setStatus("error");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <section id="contact" className="py-24 bg-neutral-light relative overflow-hidden">
            {/* ... (keep existing decorative elements) ... */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>

            {/* Geometric Shapes (Static for Contact) */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full border border-primary/20 shadow-[inset_0_0_0_1px_#D4AF37] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 shadow-[inset_0_0_0_1px_#D4AF37] opacity-10 rotate-12 pointer-events-none"></div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
                        Let's start a conversation
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-neutral-dark/70 mx-auto">
                        Have questions about Olos? Interested in a custom plan? We're here to help.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-border">
                        <div className="grid grid-cols-1 lg:grid-cols-5">

                            {/* Contact Info Sidebar Replacement: CTA */}
                            <div className="bg-primary p-10 lg:col-span-2 text-white flex flex-col justify-center relative overflow-hidden">
                                {/* Abstract geometric pattern overlay */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                                    </svg>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
                                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                                        Skip the email queue and schedule a direct consultation with our product experts. We'll verify your requirements and get you set up with a custom trial to see if Olos is right for you.
                                    </p>
                                    <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-primary bg-white hover:bg-gray-50 transition-colors shadow-sm">
                                        Schedule a Call
                                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Form Input Area */}
                            <div className="p-10 lg:col-span-3 bg-white">
                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-dark">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={isSending}
                                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={isSending}
                                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={isSending}
                                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none disabled:opacity-50"
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSending ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : "Send Message"}
                                        </button>
                                    </div>
                                    {status === "success" && (
                                        <div className="text-green-600 text-sm text-center font-medium bg-green-50 p-3 rounded-lg">
                                            Message sent successfully! We'll get back to you soon.
                                        </div>
                                    )}
                                    {status === "error" && (
                                        <div className="text-red-600 text-sm text-center font-medium bg-red-50 p-3 rounded-lg">
                                            Failed to send message: {errorMessage}
                                        </div>
                                    )}
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
