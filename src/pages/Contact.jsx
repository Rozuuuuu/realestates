import React from 'react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

export default function Contact() {
    return (
        <PageTransition>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow">
                    {/* Header */}
                    <section className="py-20 bg-white dark:bg-background-dark/50 border-b border-slate-200 dark:border-slate-800">
                        <div className="container mx-auto px-4 lg:px-10">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">Get in Touch</span>
                            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Let's Discuss Your Next Project</h1>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                                Our experts are ready to provide a detailed consultation and estimate for your construction or property needs.
                            </p>
                        </div>
                    </section>

                    {/* Contact Content */}
                    <section className="py-20">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                {/* Info Column */}
                                <div className="reveal reveal-left">
                                    <div className="space-y-6 mb-10">
                                        {[
                                            { icon: 'call', label: 'Call Us Directly', value: '+1 (555) 234-5678' },
                                            { icon: 'mail', label: 'Email Inquiries', value: 'hello@grandbuildestates.com' },
                                            { icon: 'location_on', label: 'Office Address', value: '1221 Developer Lane, Suite 400, Los Angeles, CA' },
                                            { icon: 'schedule', label: 'Business Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM' },
                                        ].map(({ icon, label, value }) => (
                                            <div key={label} className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                    <span className="material-symbols-outlined">{icon}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold">{label}</p>
                                                    <p className="text-slate-500">{value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-xl overflow-hidden grayscale contrast-125 h-56 w-full border border-slate-200 dark:border-slate-800">
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="Map"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuTfLEX63nvaSg2mOBKK-3-c0Mzf-DlMFgzVpE-kFFIMA7c1mf0baNteqC1H_NRPDXOIoICc8rRNmkXxffezZMBEQjRjTpqRfFMKLsmwYndHHmZdRUvmlY3C2MFAbSfmkP6ZtzCQDrURxcT9MC81okMlgdAekJ8_C7WvB2_biDXvXqhNBYaWP33qLDzdRHVKTNyHoNx8B3I4KtGS_ngwW3B4-GUqjt9G1bboOxgbmOMImkWtto61S_x8IEGdL6wPl7_6gs1JOkg"
                                        />
                                    </div>
                                </div>

                                {/* Form Column */}
                                <div className="reveal reveal-right bg-background-light dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 h-fit">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold">Full Name</label>
                                                <input className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold">Email Address</label>
                                                <input className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" type="email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold">Phone Number</label>
                                            <input className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+1 (000) 000-0000" type="tel" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold">Interest</label>
                                            <select className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                                <option>Residential Construction</option>
                                                <option>Commercial Development</option>
                                                <option>Property Investment</option>
                                                <option>Interior Design</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold">Message</label>
                                            <textarea className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..." rows="5"></textarea>
                                        </div>
                                        <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-md shadow-primary/20">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-slate-900 text-white py-10">
                    <div className="container mx-auto px-4 lg:px-10 text-center text-sm text-slate-500">
                        © 2024 GrandBuild Estates. All rights reserved.
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}
