import React from 'react';
import { FiMonitor, FiCode, FiZap, FiCpu, FiSend, FiShield } from 'react-icons/fi';
import './Expertise.css';

const Expertise = () => {
     return (
          <section className="expertise section" id="expertise">
               <div className="container">
                    <div className="expertise-wrapper animate-fade-in-up">

                         <div className="expertise-header">
                              <h2 className="expertise-title">Ekspertiza.</h2>
                              <p className="expertise-subtitle">Biz mijozlarimiz kutganidan a'loroq natija bera olamiz.</p>
                         </div>

                         <div className="expertise-metrics">
                              <div className="metric-box">
                                   <h3>50+</h3>
                                   <p>Amalga oshirilgan loyihalar</p>
                              </div>
                              <div className="metric-box">
                                   <h3>7.5M+</h3>
                                   <p>Qamrab olingan foydalanuvchilar</p>
                              </div>
                              <div className="metric-box">
                                   <h3>100%</h3>
                                   <p>Mijozlar mamnuniyati</p>
                              </div>
                              <div className="metric-box">
                                   <h3>24s</h3>
                                   <p>O'rtacha javob vaqti</p>
                              </div>
                         </div>

                         <div className="expertise-services">
                              <h3 className="section-subtitle">Bizning xizmatlar</h3>
                              <div className="services-grid">

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiMonitor />
                                        </div>
                                        <div>
                                             <h4>Veb-dizayn va UI/UX</h4>
                                             <p>Nafaqat chiroyli ko'rinishga ega, balki sotuvni oshiradigan konversiyaga moslashtirilgan dizaynlar.</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiCode />
                                        </div>
                                        <div>
                                             <h4>Veb-ishlab chiqish</h4>
                                             <p>Next.js, React, TypeScript – maksimal ish samaradorligi uchun eng zamonaviy texnologiyalar.</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiZap />
                                        </div>
                                        <div>
                                             <h4>Veb-ilovalar va Dasturiy ta'minot</h4>
                                             <p>Maxsus ilovalar, boshqaruv panellari va avtomatlashtirilgan tizimlar.</p>
                                        </div>
                                   </div>

                                   <div className="service-card">
                                        <div className="service-icon light-green">
                                             <FiCpu />
                                        </div>
                                        <div>
                                             <h4>Sun'iy intellekt integratsiyasi</h4>
                                             <p>Aqlli chatbotlar, avtomatlashtirish va sun'iy intellektga asoslangan xususiyatlar.</p>
                                        </div>
                                   </div>

                              </div>
                         </div>

                         <div className="expertise-industries">
                              <h3 className="section-subtitle">Soha tajribasi</h3>
                              <div className="industries-tags">
                                   <span className="industry-tag">Gastronomiya <span className="tag-count">8+ loyiha</span></span>
                                   <span className="industry-tag">Avtomobilsozlik <span className="tag-count">6+ loyiha</span></span>
                                   <span className="industry-tag">Moliya <span className="tag-count">3+ loyiha</span></span>
                                   <span className="industry-tag">Elektron tijorat <span className="tag-count">5+ loyiha</span></span>
                                   <span className="industry-tag">Sog'liqni saqlash <span className="tag-count">4+ loyiha</span></span>
                                   <span className="industry-tag">B2B Xizmatlar <span className="tag-count">10+ loyiha</span></span>
                              </div>
                         </div>

                         <div className="expertise-footer">
                              <div className="footer-tech">
                                   <h4>Zamonaviy texnologiyalar</h4>
                                   <p>Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel</p>
                              </div>
                              <div className="footer-badges">
                                   <div className="footer-badge dark">
                                        <FiSend className="badge-icon" /> PageSpeed 100/100
                                   </div>
                                   <div className="footer-badge primary">
                                        <FiShield className="badge-icon" /> Xavfsizlik va Maxfiylik
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     );
};

export default Expertise;
