import React from 'react';
import { BsStars } from 'react-icons/bs';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiFigma } from 'react-icons/si';
import { Counter } from './Statistics';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
     const { t } = useLanguage();
     const heroStats = t('hero.stats');

     return (
          <section className="hero section" id="hero">
               <div className="container hero-container">

                    <h1 className="hero-title animate-fade-in-up">
                         {t('hero.titleBefore')}<br />
                         <span className="relative-text">
                              {t('hero.titleHighlight')}
                              <svg className="hero-underline" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                   <path d="M5 20 Q 150 15, 300 18 T 595 20" stroke="#03BFB5" strokeWidth="8" strokeLinecap="round" />
                              </svg>
                         </span>
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up delay-100">
                         {t('hero.subtitle')}
                    </p>

                    <div className="hero-actions animate-fade-in-up delay-200">
                         <button className="btn btn-glow">
                              <BsStars className="sparkle-icon" /> {t('hero.cta')}
                         </button>
                    </div>

                    <div className="hero-stats animate-fade-in-up delay-300">
                         <div className="stat-block">
                              <span className="stat-number"><Counter end={10} duration={2000} suffix="+" /></span>
                              <span className="stat-text">{heroStats.completed.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
                         </div>
                         <div className="stat-divider"></div>

                         <div className="stat-block">
                              <span className="stat-number"><Counter end={25} duration={2000} suffix="K+" /></span>
                              <span className="stat-text">{heroStats.users.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
                         </div>
                         <div className="stat-divider"></div>

                         <div className="stat-block">
                              <span className="stat-number score-green"><Counter end={2} duration={2000} /></span>
                              <span className="stat-text">{heroStats.mvp.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
                         </div>
                    </div>

                    {/* Infinite Scrolling Partner Logos */}
                    <div className="partner-carousel animate-fade-in-up delay-300">
                         <div className="partner-track">
                              {/* Set 1 */}
                              <SiJavascript className="partner-icon" />
                              <SiTypescript className="partner-icon" />
                              <SiReact className="partner-icon" />
                              <SiNextdotjs className="partner-icon" />
                              <SiNodedotjs className="partner-icon" />
                              <SiPython className="partner-icon" />
                              <SiPostgresql className="partner-icon" />
                              <SiMongodb className="partner-icon" />
                              <SiFigma className="partner-icon" />

                              {/* Set 2 - Duplicated for seamless loop */}
                              <SiJavascript className="partner-icon" />
                              <SiTypescript className="partner-icon" />
                              <SiReact className="partner-icon" />
                              <SiNextdotjs className="partner-icon" />
                              <SiNodedotjs className="partner-icon" />
                              <SiPython className="partner-icon" />
                              <SiPostgresql className="partner-icon" />
                              <SiMongodb className="partner-icon" />
                              <SiFigma className="partner-icon" />
                         </div>
                    </div>

               </div>
          </section>
     );
};

export default Hero;
