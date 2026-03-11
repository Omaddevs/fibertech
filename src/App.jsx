import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';
import Expertise from './components/Expertise';
import About from './components/About';

import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <FloatingWidgets />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Statistics />
        <FAQ />
        <Expertise />
        <About />

      </main>
      <Footer />
    </div>
  );
}

export default App;
