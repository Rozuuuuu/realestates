import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

function Portfolio() {
    return (
        <PageTransition>
            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />

                <main className="flex-grow">
                    {/* Hero Section & Search */}
                    <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Our Properties</h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    Explore our curated selection of high-end residential, commercial, and renovation developments defining the future of luxury living.
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                {/* Search Bar */}
                                <div className="flex-grow">
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                                        </div>
                                        <input className="block w-full pl-11 pr-4 py-4 bg-slate-100 dark:bg-slate-800 border-none rounded focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-500 transition-all" placeholder="Search properties by name, keyword or architectural style..." type="text" />
                                    </div>
                                </div>
                                {/* Mobile Filter Trigger */}
                                <button className="lg:hidden flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded">
                                    <span className="material-symbols-outlined">filter_list</span>
                                    Filters
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Filters Section */}
                    <section className="bg-white dark:bg-slate-900 sticky top-16 z-40 border-b border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
                                <div className="flex flex-wrap items-center gap-6">
                                    {/* Project Type Dropdown */}
                                    <div className="relative">
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Project Type</label>
                                        <select className="appearance-none bg-transparent border-none p-0 pr-8 text-sm font-semibold text-slate-900 dark:text-white focus:ring-0 cursor-pointer">
                                            <option>All Types</option>
                                            <option>Residential</option>
                                            <option>Commercial</option>
                                            <option>Renovation</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-0 bottom-0 text-slate-400 pointer-events-none text-sm">expand_more</span>
                                    </div>
                                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                                    {/* Location Dropdown */}
                                    <div className="relative">
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Location</label>
                                        <select className="appearance-none bg-transparent border-none p-0 pr-8 text-sm font-semibold text-slate-900 dark:text-white focus:ring-0 cursor-pointer">
                                            <option>All Locations</option>
                                            <option>Greenwich</option>
                                            <option>Downtown NY</option>
                                            <option>Old Town</option>
                                            <option>Hamptons</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-0 bottom-0 text-slate-400 pointer-events-none text-sm">expand_more</span>
                                    </div>
                                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                                    {/* Status Dropdown */}
                                    <div className="relative">
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Status</label>
                                        <select className="appearance-none bg-transparent border-none p-0 pr-8 text-sm font-semibold text-slate-900 dark:text-white focus:ring-0 cursor-pointer">
                                            <option>All Status</option>
                                            <option>Completed</option>
                                            <option>In Progress</option>
                                            <option>Planned</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-0 bottom-0 text-slate-400 pointer-events-none text-sm">expand_more</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-slate-500">Showing 24 results</span>
                                    <button className="text-primary hover:underline text-sm font-medium">Clear All</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Grid with Map */}
                    <section className="relative">
                        <div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-280px)]">
                            {/* Map Container */}
                            <div className="hidden lg:block w-full lg:w-3/5 h-[400px] lg:h-auto sticky top-[137px] bg-slate-200 dark:bg-slate-800 overflow-hidden border-r border-slate-200 dark:border-slate-800">
                                <div className="absolute inset-0 bg-[#e5e7eb] dark:bg-[#1e293b] flex items-center justify-center">
                                    {/* Placeholder for Interactive Map */}
                                    <div className="text-center px-4">
                                        <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-slate-600 mb-4">map</span>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">Interactive Map View</p>
                                        <p className="text-slate-400 dark:text-slate-500 text-sm">Displaying 24 properties in the selected area</p>
                                    </div>
                                    {/* Simulated Pins */}
                                    <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-primary text-white rounded-full border-2 border-white flex items-center justify-center shadow-lg cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">home</span>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary text-white rounded-full border-2 border-white flex items-center justify-center shadow-lg cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">business</span>
                                    </div>
                                    <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-primary text-white rounded-full border-2 border-white flex items-center justify-center shadow-lg cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">construction</span>
                                    </div>
                                </div>
                            </div>

                            {/* Projects List */}
                            <div className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-8">
                                <div className="max-w-7xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {/* Project Card 1 */}
                                        <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern luxury villa with pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHw2h-rd_WyGwkPS93faY9UZVHC8StU-P6_QfvN7V8CAfGJUEuPDn5h4fMaA1mmpzAA1K-YoCgG_wqfZXMGQpUlZKB_qRUOeX3sICcnqYgswORPCf_ungSjxhpN2FMwc2-dUhN0rEJjXYSnfAyq0uyztZHw-QIGA50qOECJsT9kU6askUJDk5-Z8ZhywPBT_YzFB551d6dE0gozoRItlkSSI-cbcaCHX2zdR5dhlWJ-CDR0Dtavjw6IsbFfwQv6Amp78quqcVAGQ" />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Residential</span>
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Completed</span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                                    Greenwich, CT
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">The Azure Waterfront Villa</h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">A sustainable luxury residence featuring smart glass technology and zero-carbon emission systems.</p>
                                                <Link to="/luxury-lakeside-villa" className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm rounded transition-colors group/btn">
                                                    View Property
                                                    <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Project Card 2 */}
                                        <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Futuristic glass office building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCij9-o1Rk6TNJViTVuSLeOFNr7ShMh0t587Ko9k1B8s6kBmYQ449HDXa6MUMP-vbKlRQlLAvgmXNJpKlo5rLW63oSDwSD3WJ-WHgLcg-UTmPpDXOyqu13sgOMmAGwn_SbRVemLrpoRsnS_cpd1kjm6iUCxbO3kop6UNNBvZxep8qa6dBzPjTh3ybnmhhhrfz2yK-JIAOW-XCaLC3K7gfa_7iOs80BZl_GLOx2goU8M8b7WeAYBOMAH9HepQqhx2vC4JkZWj-8ZuA" />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Commercial</span>
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">In Progress</span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                                    Downtown NY
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">Beacon Plaza Corporate Hub</h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">Reimagining the modern workplace with integrated green spaces and high-efficiency HVAC solutions.</p>
                                                <Link to="/luxury-lakeside-villa" className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm rounded transition-colors group/btn">
                                                    View Property
                                                    <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Project Card 3 */}
                                        <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern renovated industrial loft" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAjeFi7q7iVcyKBjbSBogyc2xSPtCMlSyXda-AlzXl66LB19l5bh6M8zOjyUUwT0FWBvejrYAibtFrMaAV0Sd_jQct9ygalSdPHv22cOJ4-r1vRpzUSFCGnCvfnn0s1pg7sodeMRVy90Y9UW5vUJcPJ2Tfwmy6NIJ8EildMPjRGg_SIoo66xdqMnW7K56HFqOq-zJagYBnJddKFHPW6bMJMIZkqt8CgQfZH5tjoJpgUmq9NUZ14yhy-yibQsC4UriXkgwIKL-KxQ" />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Renovation</span>
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Completed</span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                                    Old Town
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">Historical Foundry Lofts</h3>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">Preserving 19th-century architecture while introducing modern industrial interiors and amenities.</p>
                                                <Link to="/luxury-lakeside-villa" className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm rounded transition-colors group/btn">
                                                    View Property
                                                    <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pagination */}
                                    <div className="mt-16 flex justify-center pb-8">
                                        <nav className="flex items-center gap-2">
                                            <button className="flex items-center justify-center w-10 h-10 rounded border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-colors">
                                                <span className="material-symbols-outlined">chevron_left</span>
                                            </button>
                                            <button className="w-10 h-10 rounded bg-primary text-white font-bold text-sm">1</button>
                                            <button className="w-10 h-10 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-colors font-bold text-sm">2</button>
                                            <button className="w-10 h-10 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-colors font-bold text-sm">3</button>
                                            <span className="px-2 text-slate-400">...</span>
                                            <button className="w-10 h-10 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-colors font-bold text-sm">12</button>
                                            <button className="flex items-center justify-center w-10 h-10 rounded border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-colors">
                                                <span className="material-symbols-outlined">chevron_right</span>
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-slate-900 text-slate-300 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            <div className="col-span-1 md:col-span-2">
                                <div className="flex items-center gap-3 mb-6 text-white">
                                    <span className="material-symbols-outlined text-3xl text-primary">domain</span>
                                    <h2 className="text-xl font-bold tracking-tight">GrandBuild Estates</h2>
                                </div>
                                <p className="max-w-md mb-8">
                                    Crafting legacy developments through precision engineering and unparalleled design excellence. Since 1994, we have been the gold standard in construction.
                                </p>
                                <div className="flex gap-4">
                                    <a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined text-sm">public</span>
                                    </a>
                                    <a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined text-sm">share</span>
                                    </a>
                                    <a className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined text-sm">alternate_email</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-6">Quick Links</h4>
                                <ul className="space-y-4 text-sm">
                                    <li><a className="hover:text-primary transition-colors" href="#">Our Process</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Partnerships</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-6">Contact Us</h4>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-lg">call</span>
                                        +1 (555) 800-2400
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                        hello@grandbuild.com
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                        850 Fifth Avenue<br />New York, NY 10065
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                            © 2024 GrandBuild Estates. All rights reserved. Professional Real Estate Development &amp; Construction Services.
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}

export default Portfolio;
