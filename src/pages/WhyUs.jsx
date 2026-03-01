import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

export default function WhyUs() {
    return (
        <PageTransition>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow">
                    {/* Page Header */}
                    <section className="bg-white dark:bg-background-dark/50 py-20 border-b border-slate-200 dark:border-slate-800">
                        <div className="container mx-auto px-4 lg:px-10">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">The Difference</span>
                            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Engineering Excellence and Unmatched Reliability</h1>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                                Three decades of building trust, one exceptional project at a time.
                            </p>
                        </div>
                    </section>

                    {/* Split Content */}
                    <section className="py-20">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="reveal reveal-left">
                                    <div className="space-y-8">
                                        {[
                                            { icon: 'history_edu', title: '25+ Years Experience', desc: 'Decades of refining our craft across diverse architectural styles and structural challenges.' },
                                            { icon: 'verified', title: 'Quality Materials', desc: 'We only partner with certified suppliers to ensure your property stands the test of time.' },
                                            { icon: 'gpp_good', title: 'Safety & Reliability', desc: 'Strict adherence to international safety standards and transparent project timelines.' },
                                            { icon: 'emoji_events', title: 'Award-Winning Designs', desc: 'Our projects have been recognised nationally for architectural innovation and sustainability.' },
                                            { icon: 'support_agent', title: 'Dedicated Support', desc: 'A personal project manager assigned to you from day one through handover and beyond.' },
                                        ].map((item) => (
                                            <div key={item.title} className="flex gap-4">
                                                <div className="bg-primary/20 p-2 rounded-lg h-fit shrink-0">
                                                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 reveal reveal-right">
                                    <img
                                        alt="Construction site team"
                                        className="w-full h-[500px] object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgaFzNIOu_4UvtFnX_XVJWbbABr7doHzCvbcKyp9Gur0z3DAmp7Es6hA0-UnEIYfwNC_7ICqyFBj9EcpBKMq8KlTBHZnrbAGrKEPCn6xhWmfE5tfI8EduuD0iV0XZi_e8QPmvRCuOALAX5Z98MraQmoLhbibBcV9kdHKexhmIsBmYAfEVsz0TBlMkvMX6Bk1MsOxK1Pns8k3NVFboizwBlrmTLeJgDEc3IAFYJXpIj8yt5ibj8wNy3JvP0-6ilK6VaPhBJlJCkWw"
                                    />
                                    <div className="absolute bottom-6 left-6 bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg flex gap-4">
                                        <div className="text-center border-r border-slate-200 dark:border-slate-800 pr-4">
                                            <p className="text-primary text-2xl font-black">500+</p>
                                            <p className="text-[10px] uppercase font-bold text-slate-500">Projects Done</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-primary text-2xl font-black">98%</p>
                                            <p className="text-[10px] uppercase font-bold text-slate-500">Client Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Bar */}
                    <section className="py-16 bg-primary/5 dark:bg-primary/10">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                {[
                                    { value: '500+', label: 'Projects Completed' },
                                    { value: '25+', label: 'Years in Business' },
                                    { value: '98%', label: 'Satisfaction Rate' },
                                    { value: '120+', label: 'Certified Staff' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-4xl font-black text-primary">{stat.value}</p>
                                        <p className="text-sm font-bold text-slate-500 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="py-16">
                        <div className="container mx-auto px-4 lg:px-10 text-center reveal">
                            <h2 className="text-3xl font-black mb-4">See Our Portfolio</h2>
                            <p className="text-slate-500 mb-6">Browse the projects that define our commitment to quality.</p>
                            <Link to="/properties" className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform">
                                View Properties
                            </Link>
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
