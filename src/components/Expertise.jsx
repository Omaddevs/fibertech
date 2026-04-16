import React from 'react';
import { FiMonitor, FiCode, FiZap, FiCpu, FiSend, FiShield, FiVideo, FiWifi, FiTarget } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Expertise.css';

const Expertise = () => {
     const { t } = useLanguage();
     const services = t('expertise.services');
     const metrics = t('expertise.metrics');

     return (
          <section className="expertise section" id="expertise">
               <div className="container">
                    <div className="expertise-wrapper animate-fade-in-up">

                         <div className="expertise-header">
                              <h2 className="expertise-title">{t('expertise.title')}</h2>
                              <p className="expertise-subtitle">{t('expertise.subtitle')}</p>
                         </div>

                         <div className="expertise-metrics">
                              <div className="metric-box">
                                   <h3>10+</h3>
                                   <p>{metrics[0]}</p>
                              </div>
                              <div className="metric-box">
                                   <h3>25K+</h3>
                                   <p>{metrics[1]}</p>
                              </div>
                              <div className="metric-box">
                                   <h3>2</h3>
                                   <p>{metrics[2]}</p>
                              </div>
                              <div className="metric-box">
                                   <h3>88%</h3>
                                   <p>{metrics[3]}</p>
                              </div>
                         </div>

                         <div className="expertise-services">
                              <h3 className="section-subtitle">{t('expertise.servicesTitle')}</h3>
                              <div className="services-grid">

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiVideo />
                                        </div>
                                        <div>
                                             <h4>{services[0].title}</h4>
                                             <p>{services[0].text}</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiCode />
                                        </div>
                                        <div>
                                             <h4>{services[1].title}</h4>
                                             <p>{services[1].text}</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiZap />
                                        </div>
                                        <div>
                                             <h4>{services[2].title}</h4>
                                             <p>{services[2].text}</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiWifi />
                                        </div>
                                        <div>
                                             <h4>{services[3].title}</h4>
                                             <p>{services[3].text}</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FaTelegramPlane />
                                        </div>
                                        <div>
                                             <h4>{services[4].title}</h4>
                                             <p>{services[4].text}</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiTarget />
                                        </div>
                                        <div>
                                             <h4>{services[5].title}</h4>
                                             <p>{services[5].text}</p>
                                        </div>
                                   </div>
                              </div>
                         </div>



                         <div className="expertise-footer">
                              <div className="footer-tech">
                                   <h4>{t('expertise.footerTitle')}</h4>
                                   <p>{t('expertise.footerText')}</p>
                              </div>

                         </div>

                    </div>
               </div>
          </section>
     );
};

export default Expertise;
