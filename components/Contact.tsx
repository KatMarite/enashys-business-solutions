import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const form = e.target as HTMLFormElement;
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                setError('Something went wrong. Please try again or contact us directly.');
            }
        } catch (err) {
            setError('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative min-h-[600px] flex flex-col lg:flex-row">
            {/* Left Content - Contact Info */}
            <div
                className="w-full lg:w-1/2 bg-ebs-purple text-white p-12 md:p-24 flex flex-col justify-center relative"
                data-aos="fade-right"
            >
                <div className="absolute top-0 left-0 w-32 h-2 bg-ebs-yellow mt-12 ml-12 md:ml-24" />

                <h2 className="text-5xl md:text-7xl font-black mb-12 mt-8">
                    CONTACT <span className="text-ebs-purple bg-white px-2">US</span>
                </h2>

                <div className="space-y-8 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Enashy's Business Solutions</h3>
                        <p className="text-white/70">We are ready to assist you</p>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-ebs-yellow flex items-center justify-center text-ebs-dark group-hover:scale-110 transition-transform">
                            <Phone size={24} />
                        </div>
                        <span className="text-xl font-medium">+27 63 209 9379</span>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-ebs-yellow flex items-center justify-center text-ebs-dark group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <span className="text-xl font-medium break-all">Info@enashysbusinesssutions.com</span>
                    </div>
                </div>

                <div className="mt-auto hidden lg:block">
                    <h3 className="text-4xl font-black mb-4">Let's Connect</h3>
                    <p className="text-lg max-w-md text-white/80 leading-relaxed">
                        Strategic • Creative • Measurable
                    </p>
                </div>
            </div>

            {/* Right Content - Contact Form */}
            <div
                className="w-full lg:w-1/2 bg-gray-50 p-10 md:p-20 flex items-center justify-center"
                data-aos="fade-left"
            >
                <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    {submitted && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500">
                                <CheckCircle size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                        <p className="text-gray-500 text-sm">Fill out the form below and we'll be in touch.</p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        action="https://formsubmit.co/Info@enashysbusinesssutions.com"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* Hidden fields for FormSubmit configuration */}
                        <input type="hidden" name="_subject" value="New Contact Form Submission - Enashy's Business Solutions" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ebs-purple focus:ring-2 focus:ring-ebs-purple/20 outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ebs-purple focus:ring-2 focus:ring-ebs-purple/20 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ebs-purple focus:ring-2 focus:ring-ebs-purple/20 outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-ebs-purple focus:ring-2 focus:ring-ebs-purple/20 outline-none transition-all resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-ebs-purple text-white font-bold rounded-xl hover:bg-ebs-dark transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};