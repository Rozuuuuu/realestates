import { useState, useEffect } from 'react';

/**
 * Persists dark mode preference in localStorage and syncs with
 * the `dark` class on <html>. Defaults to the OS preference on
 * first visit.
 */
export function useDarkMode() {
    const [dark, setDark] = useState(() => {
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) return stored === 'true';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', dark);
    }, [dark]);

    const toggle = () => setDark((d) => !d);

    return { dark, toggle };
}
