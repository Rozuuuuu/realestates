import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Properties', to: '/properties' },
    { label: 'Why Us', to: '/why-us' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
    const { dark, toggle } = useDarkMode();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMenuOpen(false); }, [location]);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 border-b border-slate-200 dark:border-slate-800 ${scrolled
                ? 'py-2 shadow-md bg-background-light/97 dark:bg-background-dark/97 backdrop-blur-md'
                : 'py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-10 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <div className={`bg-primary rounded-lg transition-all duration-300 ${scrolled ? 'p-1' : 'p-1.5'}`}>
                        <span className={`material-symbols-outlined text-white transition-all duration-300 ${scrolled ? 'text-lg' : ''}`}>architecture</span>
                    </div>
                    <h2 className={`font-bold tracking-tight transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>GrandBuild Estates</h2>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ label, to }) => {
                        const active = location.pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                className={`text-sm font-medium transition-colors relative pb-0.5 ${active
                                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded'
                                    : 'hover:text-primary'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggle}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        aria-label="Toggle dark mode"
                    >
                        <span className="material-symbols-outlined">
                            {dark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <Link
                        to="/contact"
                        className={`bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hidden sm:block ${scrolled ? 'text-xs px-4 py-2' : 'text-sm px-6 py-2.5'
                            }`}
                    >
                        Get a Quote
                    </Link>
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-4 py-4 flex flex-col gap-3 animate-[fadeIn_0.2s_ease]">
                    {NAV_LINKS.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${location.pathname === to
                                ? 'text-primary bg-primary/10'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="mt-2 bg-primary text-white font-bold text-sm px-6 py-3 rounded-lg text-center"
                    >
                        Get a Quote
                    </Link>
                </div>
            )}
        </header>
    );
}
