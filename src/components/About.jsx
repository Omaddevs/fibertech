import React, { useState } from 'react';
import { FiX, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const { t } = useLanguage();

     const openModal = (e) => {
          e.preventDefault();
          setIsModalOpen(true);
          document.body.style.overflow = 'hidden';
     };

     const closeModal = () => {
          setIsModalOpen(false);
          document.body.style.overflow = 'auto';
     };

     return (
          <section className="about section" id="about">
               <div className="container">
                    <div className="about-header-main animate-fade-in-up">
                         <h2 className="about-title-main">{t('about.title')}</h2>
                         <p className="about-subtitle-main">{t('about.subtitle')}</p>
                    </div>

                    <div className="about-card animate-fade-in-up delay-100" style={{ display: 'none' }}>
                         <div className="about-image-col">
                              <img src="src/images/Asrorbek-Makhamadjonov-1.jpg" alt="Founder" className="about-image" />
                              <div className="about-image-overlay">
                                   <div className="founder-badge">
                                        <span className="dot"></span> {t('about.founderBadge')}
                                   </div>
                                   <h3 className="founder-name">Asrorbek-Makhamadjonov</h3>
                                   <p className="founder-location">{t('about.founderLocation')}</p>
                              </div>
                         </div>
                         <div className="about-content-col">
                              <h3 className="about-content-title">{t('about.contentTitle')}</h3>
                              <p className="about-text">
                                   {t('about.paragraph1')}
                              </p>
                              <p className="about-text">
                                   {t('about.paragraph2')} <a href="#about" className="about-link" onClick={openModal}>{t('about.readMore')}</a>
                              </p>

                              <div className="about-metrics">
                                   <div className="about-metric-box">
                                        <h4>10+</h4>
                                        <p>{t('about.metrics.0')}</p>
                                   </div>
                                   <div className="about-metric-box">
                                        <h4>25K+</h4>
                                        <p>{t('about.metrics.1')}</p>
                                   </div>
                                   <div className="about-metric-box">
                                        <h4>2</h4>
                                        <p>{t('about.metrics.2')}</p>
                                   </div>
                              </div>

                              <div className="about-tags">
                                   <span className="about-tag">WEB DEVELOPMENT</span>
                                   <span className="about-tag">UI/UX DESIGN</span>
                                   <span className="about-tag">AUTOMATION</span>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Detail View Modal */}
               <div className={`about-modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
                    <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
                         <button className="about-modal-close" onClick={closeModal}>
                              <FiX />
                         </button>

                         <div className="about-modal-header">
                              <h3 className="about-modal-title">{t('about.modalTitle')}</h3>
                              <p className="about-modal-subtitle">{t('about.modalSubtitle')}</p>
                         </div>

                         <div className="about-modal-body">
                              <p>
                                   {t('about.modalParagraph1')}
                              </p>
                              <p>
                                   {t('about.modalParagraph2')}
                              </p>

                              <h4 className="about-modal-subheading">{t('about.socialTitle')}</h4>
                              <div className="about-modal-socials">
                                   <a href="https://www.instagram.com/fibertech.uz?igsh=MXE1dGgxYW5ldWc2MA==" target="_blank" rel="noreferrer" className="modal-social-item instagram" title="Instagram">
                                        <FiInstagram />
                                   </a>
                                   <a href="https://t.me/fibertech_uz" target="_blank" rel="noreferrer" className="modal-social-item telegram" title="Telegram">
                                        <FaTelegramPlane />
                                   </a>
                                   <a href="#" className="modal-social-item facebook" title="Facebook">
                                        <FiFacebook />
                                   </a>
                                   <a href="#" className="modal-social-item linkedin" title="LinkedIn">
                                        <FiLinkedin />
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default About;
