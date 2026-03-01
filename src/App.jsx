import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CaseStudy from './pages/CaseStudy';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/properties" element={<Portfolio />} />
                <Route path="/luxury-lakeside-villa" element={<CaseStudy />} />
                <Route path="/services" element={<Services />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
