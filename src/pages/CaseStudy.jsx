import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

function CaseStudy() {
    return (
        <PageTransition>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
                <Navbar />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative h-[70vh] w-full overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            data-alt="Modern luxury villa with pool at sunset"
                            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIQSRiKAxKWEjwsP8GP80cL6yxsrIMIbOfD_A2pvhhrdQvF1jaLkHKcJ5vR3GCjAulUT0D1BWVLFNG002PV6MssoLBklABsOiReYTXbbL7tnV0hbPA5E5QDi6sTKLJOb4ATvkv0C1jQmGQOUEXgw8jUKlxjGGsJfFSUJD6VmSI86UNlG4QMnQfxqVicSZmFlFQf7A87G2CFDD4Owm9hnCALg5p2aX7C-GBz4Yv_RqNGUBQTIL6Lc0_ik3Z1yOcsdw6qe6TNLK3Qg')" }}>
                        </div>
                        <div className="relative h-full flex items-center justify-center text-center px-4">
                            <div className="max-w-4xl">
                                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Luxury Lakeside Villa</h1>
                                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                    A masterpiece of modern architecture harmonizing with the serene shores of Greenwich, merging sustainable innovation with uncompromising elegance.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Project Meta Details */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-lg p-6 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 border border-slate-200 dark:border-slate-800">
                            <div className="space-y-1">
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Location</p>
                                <p className="text-lg font-semibold">Greenwich, CT</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Client</p>
                                <p className="text-lg font-semibold">Private Homeowner</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Completion</p>
                                <p className="text-lg font-semibold">October 2023</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-primary text-xs font-bold uppercase tracking-wider">Services</p>
                                <p className="text-lg font-semibold">Custom Build &amp; Interior</p>
                            </div>
                        </div>
                    </section>

                    {/* Content Sections */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Challenge & Solution */}
                            <div className="space-y-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="material-symbols-outlined text-primary">landscape</span>
                                        <h3 className="text-2xl font-bold">The Challenge</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                        The primary challenge was the site's dramatic 45-degree slope leading directly into the lake. Standard foundation methods were impossible due to environmental protection regulations and the unstable sedimentary soil composition. The client requested maximum lake visibility from every room while maintaining complete privacy from neighboring estates.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="material-symbols-outlined text-primary">psychology</span>
                                        <h3 className="text-2xl font-bold">The Solution</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                        GrandBuild Estates implemented a sophisticated helical pier foundation system that minimized ground disturbance. We utilized a tiered architectural design that follows the natural contour of the land. High-performance, low-iron structural glass was specified for the floor-to-ceiling walls, and we integrated a smart shading system that reacts to the sun's position to maintain thermal comfort.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Key Features */}
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">star</span> Key Features
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <div>
                                            <span className="font-semibold block">Floor-to-Ceiling Glass Walls</span>
                                            <span className="text-sm text-slate-500">Custom triple-glazed panes for panoramic views.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <div>
                                            <span className="font-semibold block">Geothermal Heating &amp; Cooling</span>
                                            <span className="text-sm text-slate-500">Eco-friendly climate control using the lake's thermal mass.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <div>
                                            <span className="font-semibold block">Private Dock &amp; Boathouse</span>
                                            <span className="text-sm text-slate-500">Seamlessly integrated waterfront access.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <div>
                                            <span className="font-semibold block">Zero-Edge Infinity Pool</span>
                                            <span className="text-sm text-slate-500">Visually blending with the lake's horizon.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="bg-white dark:bg-slate-900 py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-end mb-10">
                                <div>
                                    <h2 className="text-3xl font-bold">Project Gallery</h2>
                                    <p className="text-slate-500 mt-2">A closer look at the craftsmanship and detail.</p>
                                </div>
                                <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                                    View All Photos <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 group relative overflow-hidden rounded-lg aspect-video">
                                    <img alt="" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Spacious modern living room with lake views" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfnMp5xm7sUlGoUZ_5D_fSV5DsFLJvCFl4JiyRzN_pkqLVs50su3SJYDQJqL24bJsEXQNBIOutItEZ-czB3rwmxfuiMGZphTMJznQbM6IKE3ZAKHWhBNMNpa-Wy5ji7zEQLFhs0Jk0rrY3J4_mDHjSfFl2OOomR_N6iSel_YsIS7eqvmEzRvkq5yLSXY4WH7xTvA57Z9UCruztxF0Eo-sa0Qj7lK_6jX-jSDDliJ3gwB9Q59Mnvzl7dLJNPBYBU__3N1P8y6mkNQ" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white font-medium">Main Living Area</p>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg aspect-square">
                                    <img alt="" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Modern minimalist kitchen with marble island" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_zIULLiP5JJhlYQLu0NacLPcwDOBcO5PPTqbksJpksZULs6MexW6HmsyZrPwMG5H6fHZnHzMgxFBcxGXiUyfM_ek4pTlpevY3yeHQmWdZ9yzTLPyLHlstwVvrt-f0FYTYJPfoc6OHWpJXVyepFl3Nn67c4_j3NbhSDmePw_Y6OsPbc3VQpibKdeUX_low4QbPMwL0ov0-37YVcmkY6-caf8wnQmme7bEKCikRcG2PLN27Oah4vc4R1iJog3ofWQNRwLh2GrMsGg" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white font-medium">Gourmet Kitchen</p>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-lg aspect-square">
                                    <img alt="" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Luxury master bedroom with floor-to-ceiling windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbe0i03_8UqXJGoza4Ei076JTSM5BlSfpwcv4HYVrVhfgIeDO6tlZ8Z-JGxms3H-VxkAsyx39WQS0WKZbt3rRM1EFn52bgCrvFQt9v1uHpxtO9yJPMw_f3tGKMLd-z2pJiqWdALcRPfLY82bsdXX4Jb1g44QQg-izRqFPA4bfH6W5PMSXuGq4opVTaH_L-g6h2Caj1zSQdUdC1_iz7ZvwilALWPq9k2GeVyt7pexzEWBNpPQMLMF5RdKLkEZgcTcQWbSgpxFdrMA" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white font-medium">Master Suite</p>
                                    </div>
                                </div>
                                <div className="md:col-span-2 group relative overflow-hidden rounded-lg aspect-video">
                                    <img alt="" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-alt="Aerial view of the villa and private dock" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkxpDSkdNW4PpkspPddlpnhDzVRIekNCXMshWP-8XtEO6rxCGRH8XGUGVsmNcdqWqJoKd_REVhnxnJKHG2MGk-7zuUyXMabsSrdZl3QPaZd4t8IDU_ua_5W6Am0iozJRRuJQ3v9PvytiHBIErCJl0_UTdWQJbVVhoZASAP5qSc-C3NRhQmMZcr28TSRfUEINeYw8Vkq-Drhtj8qlPodeeSpwGZI-KLXIh8DLmR615NtfJkRyia3T6sNHBv6154xt4gxK9cjKM-gA" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white font-medium">Exterior Elevation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonial */}
                    <section className="py-20 bg-primary/5">
                        <div className="max-w-4xl mx-auto px-4 text-center">
                            <span className="material-symbols-outlined text-primary text-5xl mb-6">format_quote</span>
                            <p className="text-2xl italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
                                "GrandBuild Estates turned our impossible site into a dream home. Their engineering expertise and design sensibility are unmatched. We wake up every morning feeling like we're on a permanent vacation."
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-primary">
                                    <img alt="" data-alt="Portrait of the homeowner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAun13-53gn08xV41kQaHRxaEzYs1Ti_lh8RUA5VIv1JkybZJquMnaBogPzVNgJRjgIZ8wVgQZTDxP_PBgUs8VkSnJYVUhtBCeDoI4TYXtyGgqAxi_LbcK9eO0Bf8G78kNYn6zW2TDDbeC7Ia2e8gYPlMuewZwPQ6xBZhTDit5JeU6s5pkEwWOyKlCLec5oPQMQgXNZtZvRQ1lsiZG3xTd6IfRaZPw7W-afSRUBc5HIFgiA6ZY4f4YPZutkx17dVRWZbg5-Kl1Qw" />
                                </div>
                                <p className="font-bold text-lg">Mark Henderson</p>
                                <p className="text-sm text-slate-500">Homeowner, Greenwich</p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-24 text-center">
                        <div className="max-w-2xl mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">Interested in a similar project?</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Whether it's a lakeside retreat or a modern urban estate, let's discuss how we can bring your vision to life.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    Let's talk <span className="material-symbols-outlined">chat</span>
                                </button>
                                <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                    View More Projects
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-slate-900 text-slate-400 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                                <span className="text-lg font-bold">GrandBuild Estates</span>
                            </div>
                            <p className="text-sm">© 2023 GrandBuild Estates. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a className="hover:text-white transition-colors" href="#">Instagram</a>
                                <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
                                <a className="hover:text-white transition-colors" href="#">Houzz</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}

export default CaseStudy;
