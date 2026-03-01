import React from 'react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const testimonials = [
    {
        quote: '"GrandBuild Estates turned our vision into a reality faster than we expected. Their attention to detail in the custom finishes is simply remarkable."',
        name: 'Jonathan Miller', role: 'Homeowner',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB30sve_MPbGMl5FO8qdwWn-0zWkaVjQ4n7j38bvLEy2SFHULPeeQDo80G2ta9O8jR1EGcxjno1zdRbiZXh1ESx6tS4oJhouC70nnRUQSyaTMbgb7wBWmARYihP2q9-R1DA-4EjvkSAKzTRS2ZQpZl9XudeumTp1H0PQAO5Y5HAKRnuJGjfRHZBv4OvhU1aGSEt2rYpaGQM0u8NJZQX5_Dh0K2QP1OncOc6Aa496Y1zCRE7PXnfQwLsG8GOBK4eXvmq6hRDxlCy7g',
    },
    {
        quote: '"Professional from day one. They managed the entire construction of our office complex with zero delays and kept us under budget."',
        name: 'Sarah Chen', role: 'CEO, TechCore Solutions',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp36aVysD8TrhlM6E3yAznZ-IOPIao1L1BMxiNXknMt-E7_XRv9JwnoNp92B11c5-DTkjHNKu1t3rHBMOB9zJXGrTp4KZcd6xO8CMld3zUIq2Ivj4j9bnsujGqVZxZnWjKQNApgZ4oUhVqX52_2LYCJXy1aFxJP1A1k8PdK9_xt6xsYBUaA29TikRsg0-gyC9slm8McVSdsnLhLxAJ-TGclFFHYdJr_nBDpSk2Mi584b4yTXRNIhvf0yfli06HExtr-6xQVMmwHg',
    },
    {
        quote: '"Investing with them was the best financial decision I\'ve made. The property value has grown 25% in just two years. Highly recommended."',
        name: 'Marcus Thompson', role: 'Real Estate Investor',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6RkgtXEoJdBD9PaQTyMqYoutz7pT8O55Showk-MJfIgEHVKuR90UF1x-svgcL1wSiXlji4K1JQ4gbU31O4EckmPHs6DVUBwwim49HFjGmgTFSYdkcZ7loRjZLiyW3Wj1VAfJChDNg-910pLXvCs6gveHJfOuRrP7i_7iGYcm27D45JKiy5eCCA2ecTnSeZSveSLqwM6Ao4O5fcq_cM-Rr31LyzT9gkefHTSAe4NcvfpCsegbSPFWUy6Byfau0FY_G2XIo6etiw',
    },
    {
        quote: '"The team at GrandBuild went above and beyond at every stage. Our dream home is now a reality, and the craftsmanship is extraordinary."',
        name: 'Amanda Foster', role: 'Homeowner, Greenwich CT',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1weeVT79LrvZaFCzsEovaBuAXeofTDiZiWXGoJM5qsZ1eK9MOdXVEk1DFwAsksdAkBDRx6fbR77aRAoVt4r_ayTKHBr607Nh6IxUS035JuKkZLe770AMf9cjqhH-WW3Bq403qgUg8_GcUZfbrybLFs9i7x3vQHcdFLKeLWN0XAhPNkklOBwjHthp0xXIqZVqGQXDYTMEaUhkxTgGmBv-Lx5w5cVdQso3cloZjhMQRqvk0tqKzFHLC0O5uukmZMGFLPxwJrRdgtw',
    },
    {
        quote: '"We handed over the brief and GrandBuild handled everything. Transparent, on time, and the quality is second to none."',
        name: 'Richard Okafor', role: 'Commercial Developer',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6RkgtXEoJdBD9PaQTyMqYoutz7pT8O55Showk-MJfIgEHVKuR90UF1x-svgcL1wSiXlji4K1JQ4gbU31O4EckmPHs6DVUBwwim49HFjGmgTFSYdkcZ7loRjZLiyW3Wj1VAfJChDNg-910pLXvCs6gveHJfOuRrP7i_7iGYcm27D45JKiy5eCCA2ecTnSeZSveSLqwM6Ao4O5fcq_cM-Rr31LyzT9gkefHTSAe4NcvfpCsegbSPFWUy6Byfau0FY_G2XIo6etiw',
    },
    {
        quote: '"Five stars aren\'t enough. GrandBuild completely transformed a dilapidated warehouse into a stunning mixed-use development."',
        name: 'Priya Nair', role: 'Interior Architect',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp36aVysD8TrhlM6E3yAznZ-IOPIao1L1BMxiNXknMt-E7_XRv9JwnoNp92B11c5-DTkjHNKu1t3rHBMOB9zJXGrTp4KZcd6xO8CMld3zUIq2Ivj4j9bnsujGqVZxZnWjKQNApgZ4oUhVqX52_2LYCJXy1aFxJP1A1k8PdK9_xt6xsYBUaA29TikRsg0-gyC9slm8McVSdsnLhLxAJ-TGclFFHYdJr_nBDpSk2Mi584b4yTXRNIhvf0yfli06HExtr-6xQVMmwHg',
    },
];

const stars = Array(5).fill(null);

export default function Testimonials() {
    return (
        <PageTransition>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow">
                    {/* Header */}
                    <section className="py-20 bg-white dark:bg-background-dark/50 border-b border-slate-200 dark:border-slate-800">
                        <div className="container mx-auto px-4 lg:px-10 text-center max-w-2xl">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">Testimonials</span>
                            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">What Our Clients Say</h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">Real stories from real clients who trusted GrandBuild with their most important investments.</p>
                        </div>
                    </section>

                    {/* Testimonials Grid */}
                    <section className="py-20">
                        <div className="container mx-auto px-4 lg:px-10">
                            <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {testimonials.map((t) => (
                                    <div key={t.name} className="bg-white dark:bg-background-dark p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                                        <div className="flex text-primary mb-4">
                                            {stars.map((_, i) => (
                                                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            ))}
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed flex-grow mb-6">{t.quote}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                                                <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{t.name}</p>
                                                <p className="text-xs text-slate-400">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Trust Bar */}
                    <section className="py-14 bg-primary/5 dark:bg-primary/10">
                        <div className="container mx-auto px-4 lg:px-10 reveal text-center">
                            <h2 className="text-2xl font-black mb-2">Trusted by hundreds of homeowners and developers</h2>
                            <p className="text-slate-500 mb-6">Join the GrandBuild family today.</p>
                            <div className="flex justify-center gap-8 text-center flex-wrap">
                                {[['500+', 'Projects'], ['98%', 'Satisfaction'], ['25+', 'Years'], ['120+', 'Staff']].map(([val, lbl]) => (
                                    <div key={lbl}>
                                        <p className="text-3xl font-black text-primary">{val}</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{lbl}</p>
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
