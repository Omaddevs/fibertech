import React from 'react';
import './About.css';

const About = () => {
     return (
          <section className="about section" id="about">
               <div className="container">
                    <div className="about-header-main animate-fade-in-up">
                         <h2 className="about-title-main">O'zim haqimda.</h2>
                         <p className="about-subtitle-main">Flexy ortidagi mutaxassis.</p>
                    </div>

                    <div className="about-card animate-fade-in-up delay-100">
                         <div className="about-image-col">
                              <img src="src/images/Asrorbek-Makhamadjonov-1.jpg" alt="Founder" className="about-image" />
                              <div className="about-image-overlay">
                                   <div className="founder-badge">
                                        <span className="dot"></span> Founder & Developer
                                   </div>
                                   <h3 className="founder-name">Asrorbek-Makhamadjonov</h3>
                                   <p className="founder-location">31 Yosh • Toshkent, O'zbekiston</p>
                              </div>
                         </div>
                         <div className="about-content-col">
                              <h3 className="about-content-title">Bir maqsad, aniq qarashlar.</h3>
                              <p className="about-text">
                                   Men Asadbek – Toshkentdagi "Flexy" IT agentligi ortidagi mutaxassisman.
                                   Katta jamoalar yo'q, keraksiz uchrashuvlar yo'q, bekorga sarflangan vaqt yo'q.
                                   Yosh dasturchi sifatida innovatsion fikrlash bilan birga samarali, sifatli va tez ishlayman.
                              </p>
                              <p className="about-text">
                                   Sizga eng yaxshi natijani taqdim etish uchun hamma narsani o'zim boshqaraman va amalga oshiraman. Shunchaki ishlashi kerak bo'lgan narsalar uchun ortiqcha vaqt sarflamayman. Mukammallik haqida gap ketganda, men eng yaxshi hamkoringizman. <a href="#contact" className="about-link">Men haqimda ko'proq bilib oling.</a>
                              </p>

                              <div className="about-metrics">
                                   <div className="about-metric-box">
                                        <h4>7.5M+</h4>
                                        <p>Noyob foydalanuvchilar</p>
                                   </div>
                                   <div className="about-metric-box">
                                        <h4>3.4M+</h4>
                                        <p>Sahifa ko'rishlari</p>
                                   </div>
                                   <div className="about-metric-box">
                                        <h4>100%</h4>
                                        <p>Mamnun mijozlar</p>
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
          </section>
     );
};

export default About;
