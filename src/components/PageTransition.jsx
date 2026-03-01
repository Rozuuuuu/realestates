import React, { useEffect } from 'react';

/**
 * Wraps page content with a fade-in-up animation on mount.
 * Also triggers scroll-reveal for any .reveal / .reveal-stagger elements.
 */
export default function PageTransition({ children }) {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal, .reveal-stagger');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="page-enter">
            {children}
        </div>
    );
}
