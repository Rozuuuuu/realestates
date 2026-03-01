import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const services = [
    {
        icon: 'apartment',
        title: 'Residential & Commercial',
        desc: 'High-quality, durable structures optimized for both modern living and efficient business operations.',
        detail: 'From single-family residences to large-scale commercial complexes, we handle every aspect of the build lifecycle with precision and care.',
    },
    {
        icon: 'home_pin',
        title: 'Custom Home Building',
        desc: 'Bespoke luxury residences designed from scratch to match your specific aesthetic and lifestyle requirements.',
        detail: 'Our architects and designers work directly with you to translate your vision into detailed plans and bring them to life with the finest materials.',
    },
    {
        icon: 'foundation',
        title: 'Property Development',
        desc: 'Transforming raw land into vibrant, sustainable communities through strategic urban planning.',
        detail: 'We manage the full development pipeline — from land acquisition and feasibility studies to infrastructure, landscaping, and handover.',
    },
    {
        icon: 'insights',
        title: 'Property Investment',
        desc: 'Expert advisory services and data-driven insights for long-term real estate portfolio growth.',
        detail: 'Our investment division helps you identify high-yield opportunities, assess risk, and structure deals that deliver consistent returns.',
    },
    {
        icon: 'design_services',
        title: 'Interior Design',
        desc: 'Sophisticated interior solutions that transform raw spaces into inspiring environments.',
        detail: 'Our in-house design team crafts cohesive interior schemes — from materials and lighting to furniture and art curation.',
    },
    {
        icon: 'gavel',
        title: 'Legal & Documentation',
        desc: 'End-to-end handling of permits, title transfers, and regulatory compliance for your peace of mind.',
        detail: 'We partner with leading property law firms to ensure every project meets local, state, and federal requirements without delay.',
    },
];

export default function Services() {
    return (
        <PageTransition>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow">
                    {/* Page Header */}
                    <section className="bg-white dark:bg-background-dark/50 py-20 border-b border-slate-200 dark:border-slate-800">
                        <div className="container mx-auto px-4 lg:px-10">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Expertise</span>
                            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Comprehensive Services</h1>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                                From initial blueprint to the final finishing touch, we provide end-to-end development services for every need.
                            </p>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="py-20">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.map((s) => (
                                    <div key={s.title} className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-4 block">{s.icon}</span>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{s.desc}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Banner */}
                    <section className="py-16 bg-primary text-white">
                        <div className="container mx-auto px-4 lg:px-10 text-center reveal">
                            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Start Your Project?</h2>
                            <p className="text-white/80 mb-8 max-w-xl mx-auto">Our experts are standing by to provide a personalised consultation and estimate.</p>
                            <Link to="/contact" className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform">
                                Get a Free Quote
                            </Link>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-10">
                    <div className="container mx-auto px-4 lg:px-10 text-center text-sm text-slate-500">
                        © 2024 GrandBuild Estates. All rights reserved.
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}
