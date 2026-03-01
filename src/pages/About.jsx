import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const team = [
    {
        name: 'Robert Anderson', role: 'Founder & Principal Architect',
        bio: 'Robert brings over 30 years of architectural vision, focusing on sustainable and iconic urban designs.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6RkgtXEoJdBD9PaQTyMqYoutz7pT8O55Showk-MJfIgEHVKuR90UF1x-svgcL1wSiXlji4K1JQ4gbU31O4EckmPHs6DVUBwwim49HFjGmgTFSYdkcZ7loRjZLiyW3Wj1VAfJChDNg-910pLXvCs6gveHJfOuRrP7i_7iGYcm27D45JKiy5eCCA2ecTnSeZSveSLqwM6Ao4O5fcq_cM-Rr31LyzT9gkefHTSAe4NcvfpCsegbSPFWUy6Byfau0FY_G2XIo6etiw',
    },
    {
        name: 'Elena Rodriguez', role: 'Head of Construction',
        bio: 'Elena ensures every project meets our rigorous standards for safety, quality, and timely delivery.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp36aVysD8TrhlM6E3yAznZ-IOPIao1L1BMxiNXknMt-E7_XRv9JwnoNp92B11c5-DTkjHNKu1t3rHBMOB9zJXGrTp4KZcd6xO8CMld3zUIq2Ivj4j9bnsujGqVZxZnWjKQNApgZ4oUhVqX52_2LYCJXy1aFxJP1A1k8PdK9_xt6xsYBUaA29TikRsg0-gyC9slm8McVSdsnLhLxAJ-TGclFFHYdJr_nBDpSk2Mi584b4yTXRNIhvf0yfli06HExtr-6xQVMmwHg',
    },
    {
        name: 'David Smith', role: 'Senior Investment Advisor',
        bio: 'David provides our clients with strategic financial insights to maximise the value of their property portfolios.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB30sve_MPbGMl5FO8qdwWn-0zWkaVjQ4n7j38bvLEy2SFHULPeeQDo80G2ta9O8jR1EGcxjno1zdRbiZXh1ESx6tS4oJhouC70nnRUQSyaTMbgb7wBWmARYihP2q9-R1DA-4EjvkSAKzTRS2ZQpZl9XudeumTp1H0PQAO5Y5HAKRnuJGjfRHZBv4OvhU1aGSEt2rYpaGQM0u8NJZQX5_Dh0K2QP1OncOc6Aa496Y1zCRE7PXnfQwLsG8GOBK4eXvmq6hRDxlCy7g',
    },
];

export default function About() {
    return (
        <PageTransition>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow">
                    {/* Hero */}
                    <section className="py-24 bg-white dark:bg-background-dark/50 border-b border-slate-200 dark:border-slate-800">
                        <div className="container mx-auto px-4 lg:px-10 max-w-3xl">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">About Us</span>
                            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-6">Building a Legacy of Excellence</h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Since our founding, GrandBuild Estates has been committed to redefining the landscape of luxury construction and property development. Our mission is to combine timeless craftsmanship with modern innovation to create spaces that inspire and endure for generations.
                            </p>
                        </div>
                    </section>

                    {/* Mission / Vision */}
                    <section className="py-20">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="reveal reveal-left p-10 rounded-2xl bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-3xl text-primary mb-4 block">flag</span>
                                    <h3 className="text-2xl font-black mb-3">Our Mission</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        To deliver transformative, sustainable built environments that elevate communities and surpass client expectations through innovative design, uncompromising quality, and transparent execution.
                                    </p>
                                </div>
                                <div className="reveal reveal-right p-10 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <span className="material-symbols-outlined text-3xl text-primary mb-4 block">visibility</span>
                                    <h3 className="text-2xl font-black mb-3">Our Vision</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        To be the most trusted name in luxury real estate development, recognised globally for architectural excellence, environmental responsibility, and lasting legacy projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team */}
                    <section className="py-20 bg-white dark:bg-background-dark/50 border-t border-slate-200 dark:border-slate-800">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="reveal text-center mb-14">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">The People Behind It</span>
                                <h2 className="text-3xl md:text-4xl font-black mt-2">Meet Our Team</h2>
                            </div>
                            <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
                                {team.map((member) => (
                                    <div key={member.name} className="group bg-background-light dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                src={member.img}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                                            <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{member.bio}</p>
                                        </div>
                                    </div>
                                ))}
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
