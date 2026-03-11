import React from 'react';
import { BsStars } from 'react-icons/bs';
import { SiVercel, SiFigma, SiReact, SiGooglecloud, SiOpenai, SiFramer } from 'react-icons/si';
import { PiFramerLogoFill } from 'react-icons/pi';
import './Hero.css';

const Hero = () => {
     return (
          <section className="hero section" id="hero">
               <div className="container hero-container">

                    <h1 className="hero-title animate-fade-in-up">
                         Biznesingiz uchun<br />
                         <span className="relative-text">
                              IT yechimlar
                              <svg className="hero-underline" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                   <path d="M5 20 Q 150 15, 300 18 T 595 20" stroke="#03BFB5" strokeWidth="8" strokeLinecap="round" />
                              </svg>
                         </span>
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up delay-100">
                         Biz biznesingiz uchun zamonaviy web saytlar, CRM tizimlar va digital xizmatlar yaratib, raqamli rivojlanishingizga yordam beramiz.
                    </p>

                    <div className="hero-actions animate-fade-in-up delay-200">
                         <button className="btn btn-glow">
                              <BsStars className="sparkle-icon" /> Loyihani boshlash
                         </button>
                    </div>

                    <div className="hero-stats animate-fade-in-up delay-300">
                         <div className="stat-block">
                              <span className="stat-number">92+</span>
                              <span className="stat-text">Projekte<br />abgeschlossen</span>
                         </div>
                         <div className="stat-divider"></div>

                         <div className="stat-block">
                              <span className="stat-number">100</span>
                              <span className="stat-text">PageSpeed<br />Score</span>
                         </div>
                         <div className="stat-divider"></div>

                         <div className="stat-block">
                              <span className="stat-number score-green">4.9</span>
                              <span className="stat-text">Google<br />Bewertung</span>
                         </div>
                    </div>

                    {/* Infinite Scrolling Partner Logos */}
                    <div className="partner-carousel animate-fade-in-up delay-300">
                         <div className="partner-track">
                              {/* Set 1 */}
                              <SiOpenai className="partner-icon" />
                              <h3 className="partner-text">AI</h3>
                              <h3 className="partner-text italic">xl</h3>
                              <PiFramerLogoFill className="partner-icon" />
                              <SiReact className="partner-icon react-icon" />
                              <SiVercel className="partner-icon vercel-icon" />
                              <SiGooglecloud className="partner-icon cloud-icon" />
                              <h3 className="partner-text plesk">plesk</h3>

                              {/* Set 2 - Duplicated for seamless loop */}
                              <SiOpenai className="partner-icon" />
                              <h3 className="partner-text">AI</h3>
                              <h3 className="partner-text italic">xl</h3>
                              <PiFramerLogoFill className="partner-icon" />
                              <SiReact className="partner-icon react-icon" />
                              <SiVercel className="partner-icon vercel-icon" />
                              <SiGooglecloud className="partner-icon cloud-icon" />
                              <h3 className="partner-text plesk">plesk</h3>
                         </div>
                    </div>

               </div>
          </section>
     );
};

export default Hero;
