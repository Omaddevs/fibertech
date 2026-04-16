import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Expertise from './components/Expertise';

import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-wrapper">
        <FloatingWidgets />
        <Header />
        <main>
          <Hero />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Expertise />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
