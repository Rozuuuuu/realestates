import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const SLIDES = [
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR2FwESCKyKCabUEuDM2N0rlhnhuQYPF13jTL19Jixf4z3qJBST1o2VaWeQMKDZgVX3DpyjXiNGfpxrh9C3p32boGFCf0wbwoEN9k7YgsQb6lFtaSHxcXHjLetmsH5YsFcOA7ysB1RrPzfWEDGCQHC2qdADN6HiLql8_kJckZOw46UK87zEC5XLzaGxn7y8pjDwUjNTBqwI7dHiPauNxXllWuTjEj8jEHwS4wcmdXuqNtiC17h5YGuCgkmarthozdHbh944D02BQ',
        alt: 'Modern Luxury Home',
        heading: 'Building Your Dreams, One Brick at a Time',
        sub: 'GrandBuild Estates delivers premium construction and real estate solutions tailored to your unique vision and lifestyle.',
    },
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgaFzNIOu_4UvtFnX_XVJWbbABr7doHzCvbcKyp9Gur0z3DAmp7Es6hA0-UnEIYfwNC_7ICqyFBj9EcpBKMq8KlTBHZnrbAGrKEPCn6xhWmfE5tfI8EduuD0iV0XZi_e8QPmvRCuOALAX5Z98MraQmoLhbibBcV9kdHKexhmIsBmYAfEVsz0TBlMkvMX6Bk1MsOxK1Pns8k3NVFboizwBlrmTLeJgDEc3IAFYJXpIj8yt5ibj8wNy3JvP0-6ilK6VaPhBJlJCkWw',
        alt: 'Construction team on site',
        heading: 'Engineering Excellence, Built to Last',
        sub: 'Our expert teams bring 25+ years of precision craftsmanship and certified quality to every project we undertake.',
    },
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIQSRiKAxKWEjwsP8GP80cL6yxsrIMIbOfD_A2pvhhrdQvF1jaLkHKcJ5vR3GCjAulUT0D1BWVLFNG002PV6MssoLBklABsOiReYTXbbL7tnV0hbPA5E5QDi6sTKLJOb4ATvkv0C1jQmGQOUEXgw8jUKlxjGGsJfFSUJD6VmSI86UNlG4QMnQfxqVicSZmFlFQf7A87G2CFDD4Owm9hnCALg5p2aX7C-GBz4Yv_RqNGUBQTIL6Lc0_ik3Z1yOcsdw6qe6TNLK3Qg',
        alt: 'Luxury lakeside villa',
        heading: 'Luxury Properties That Inspire',
        sub: 'From lakeside retreats to urban high-rises, we design and deliver spaces that redefine the art of living.',
    },
];

const INTERVAL = 5000; // ms between auto-advances

const featuredProperties = [
    {
        type: 'Residential',
        status: 'Available',
        statusColor: 'bg-emerald-500',
        location: 'North Heights District, CA',
        name: 'Modern Villa Collections',
        desc: 'High-quality, durable structures optimized for modern living with premium finishes throughout.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkfv-G79ou1G_zAN5bohKSE_QZZoq_u4Wlf5hf85ZIJLr3lW1FFDTulKGOwpLFX_G2N2cJWuH4emhZLrlTQgoA6mNEk-eIg_ccdDej9MdUud-znz0PSG99mDZuMw2BRuZiMh_7WaQ0A5tBNcaJCO6kevvT-BV1LU239FpliQebDLZsRUAQNTJTLfHEqiQpuKmElla9LRAZEBSU-0ittUA6fiYKKJrqznN5yAa3H1xYx8ui9HpfqSwknXc7kwbC6vHs3vxosw99hQ',
        to: '/luxury-lakeside-villa',
    },
    {
        type: 'Commercial',
        status: 'In Progress',
        statusColor: 'bg-amber-500',
        location: 'Downtown Business Hub',
        name: 'Beacon Plaza Corporate Hub',
        desc: 'Reimagining the modern workplace with integrated green spaces and high-efficiency systems.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCij9-o1Rk6TNJViTVuSLeOFNr7ShMh0t587Ko9k1B8s6kBmYQ449HDXa6MUMP-vbKlRQlLAvgmXNJpKlo5rLW63oSDwSD3WJ-WHgLcg-UTmPpDXOyqu13sgOMmAGwn_SbRVemLrpoRsnS_cpd1kjm6iUCxbO3kop6UNNBvZxep8qa6dBzPjTh3ybnmhhhrfz2yK-JIAOW-XCaLC3K7gfa_7iOs80BZl_GLOx2goU8M8b7WeAYBOMAH9HepQqhx2vC4JkZWj-8ZuA',
        to: '/luxury-lakeside-villa',
    },
    {
        type: 'Renovation',
        status: 'Completed',
        statusColor: 'bg-emerald-500',
        location: 'Old Town',
        name: 'Historical Foundry Lofts',
        desc: 'Preserving 19th-century architecture while introducing modern industrial interiors and amenities.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAjeFi7q7iVcyKBjbSBogyc2xSPtCMlSyXda-AlzXl66LB19l5bh6M8zOjyUUwT0FWBvejrYAibtFrMaAV0Sd_jQct9ygalSdPHv22cOJ4-r1vRpzUSFCGnCvfnn0s1pg7sodeMRVy90Y9UW5vUJcPJ2Tfwmy6NIJ8EildMPjRGg_SIoo66xdqMnW7K56HFqOq-zJagYBnJddKFHPW6bMJMIZkqt8CgQfZH5tjoJpgUmq9NUZ14yhy-yibQsC4UriXkgwIKL-KxQ',
        to: '/luxury-lakeside-villa',
    },
];

export default function LandingPage() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goTo = useCallback((index) => {
        if (animating) return;
        setAnimating(true);
        setCurrent(index);
        setTimeout(() => setAnimating(false), 700);
    }, [animating]);

    const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);
    const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, INTERVAL);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <PageTransition>
            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />

                {/* Hero Slideshow */}
                <section className="relative h-screen w-full overflow-hidden">
                    {/* Slides */}
                    {SLIDES.map((slide, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                                src={slide.img}
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                    ))}

                    {/* Slide content */}
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                        <div className="max-w-4xl flex flex-col items-center gap-6">
                            <h1
                                key={current + '-h'}
                                className="text-4xl md:text-7xl font-black text-white leading-tight"
                                style={{ animation: 'fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
                            >
                                {SLIDES[current].heading}
                            </h1>
                            <p
                                key={current + '-p'}
                                className="text-lg md:text-2xl text-slate-200 font-normal max-w-2xl"
                                style={{ animation: 'fadeInUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}
                            >
                                {SLIDES[current].sub}
                            </p>
                            <div
                                key={current + '-btns'}
                                className="flex flex-col sm:flex-row gap-4 mt-8"
                                style={{ animation: 'fadeInUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both' }}
                            >
                                <Link to="/properties" className="bg-primary text-white text-lg font-bold px-12 py-4 text-center rounded-xl hover:scale-105 transition-transform">
                                    View Properties
                                </Link>
                                <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-bold px-12 py-4 rounded-xl hover:bg-white/20 transition-all">
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Prev arrow */}
                    <div className="absolute inset-y-0 left-4 lg:left-10 z-30 flex items-center">
                        <button onClick={prev} className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all hover:scale-110">
                            <span className="material-symbols-outlined text-3xl">chevron_left</span>
                        </button>
                    </div>

                    {/* Next arrow */}
                    <div className="absolute inset-y-0 right-4 lg:right-10 z-30 flex items-center">
                        <button onClick={next} className="p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all hover:scale-110">
                            <span className="material-symbols-outlined text-3xl">chevron_right</span>
                        </button>
                    </div>

                    {/* Dot indicators */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-white/40 hover:bg-white/70'}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Featured Properties */}
                <section className="py-20 px-4 bg-white dark:bg-background-dark/50" id="properties">
                    <div className="container mx-auto">
                        <div className="reveal flex items-end justify-between mb-12">
                            <div className="flex flex-col gap-2">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Portfolio</span>
                                <h2 className="text-3xl md:text-4xl font-black">Featured Properties</h2>
                            </div>
                            <Link
                                to="/properties"
                                className="text-primary font-bold text-sm underline decoration-2 underline-offset-4 hidden sm:block hover:text-primary/80 transition-colors"
                            >
                                Explore All Properties →
                            </Link>
                        </div>

                        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
                            {featuredProperties.map((p) => (
                                <div key={p.name} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            alt={p.name}
                                            src={p.img}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                                {p.type}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`${p.statusColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                                                {p.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            {p.location}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                            {p.name}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">{p.desc}</p>
                                        <Link
                                            to={p.to}
                                            className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm rounded transition-colors"
                                        >
                                            View Property
                                            <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10 sm:hidden reveal">
                            <Link to="/properties" className="inline-block text-primary font-bold text-sm underline decoration-2 underline-offset-4">
                                Explore All Properties →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-16">
                    <div className="container mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary p-1 rounded-lg">
                                        <span className="material-symbols-outlined text-white text-base">architecture</span>
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">GrandBuild</h2>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">Defining modern construction through excellence, sustainability, and innovative design. Your vision, our build.</p>
                                <div className="flex gap-4">
                                    {['public', 'share', 'thumb_up'].map((icon) => (
                                        <a key={icon} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                            <span className="material-symbols-outlined text-xs">{icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold mb-6 text-slate-200">Services</h4>
                                <ul className="space-y-3 text-sm text-slate-400">
                                    {['House Construction', 'Office Renovation', 'Interior Design', 'Legal Documentation'].map((item) => (
                                        <li key={item}><Link className="hover:text-primary transition-colors" to="/services">{item}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-6 text-slate-200">Company</h4>
                                <ul className="space-y-3 text-sm text-slate-400">
                                    <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                                    <li><Link to="/about" className="hover:text-primary transition-colors">Our Team</Link></li>
                                    <li><Link to="/properties" className="hover:text-primary transition-colors">Properties</Link></li>
                                    <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-6 text-slate-200">Newsletter</h4>
                                <p className="text-sm text-slate-400 mb-4">Stay updated with our latest property launches.</p>
                                <div className="flex">
                                    <input className="bg-slate-800 border-none rounded-l-lg p-2 text-xs w-full focus:ring-0" placeholder="Your Email" type="email" />
                                    <button className="bg-primary px-4 py-2 rounded-r-lg text-xs font-bold">Join</button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                            <p>© 2024 GrandBuild Estates. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a className="hover:text-slate-300" href="#">Privacy Policy</a>
                                <a className="hover:text-slate-300" href="#">Terms of Service</a>
                                <a className="hover:text-slate-300" href="#">Cookie Settings</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </PageTransition>
    );
}
