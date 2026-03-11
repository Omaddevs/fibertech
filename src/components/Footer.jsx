import React from 'react';
import { FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const SparkleIcon = () => (
     <svg className="btn-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6083 1.83851C11.8028 2.05315 11.979 2.27838 12.134 2.51138L12.5645 3.15876C13.5678 4.66723 15.011 5.86435 16.7115 6.60228L17.4877 6.93893C19.8653 7.97125 21.6508 9.94046 22.4284 12.3905C22.6229 12.1759 22.7991 11.9506 22.9542 11.7176L23.3847 11.0702C24.388 9.56177 25.8312 8.36465 27.5317 7.62672L28.3079 7.29007C30.6855 6.25775 32.471 4.28854 33.2486 1.83851C33.0541 2.05315 32.8779 2.27838 32.7228 2.51138L32.2923 3.15876C31.289 4.66723 29.8458 5.86435 28.1453 6.60228L27.3691 6.93893C24.9915 7.97125 23.206 9.94046 22.4284 12.3905C22.2339 12.1759 22.0577 11.9506 21.9026 11.7176C20.6931 10.1587 18.9197 9.07062 16.9038 8.64756L16.2736 8.51523C13.8824 8.01358 11.8658 6.46083 10.7483 4.28854C10.9427 4.0739 11.119 3.84867 11.274 3.61567L11.7045 2.96829C12.7078 1.45981 14.151 0.262696 15.8515 -0.475231L16.6277 -0.811883C14.2501 0.220436 12.4646 2.18965 11.687 4.63968C11.4925 4.85431 11.3163 5.07955 11.1612 5.31255C8.90563 8.24354 5.25996 9.87157 1.42841 9.6105V9.6105C5.02988 10.1472 8.41164 11.6669 10.9702 13.9213L11.6083 1.83851Z" />
          <path d="M12 2L13 6H16L13.5 8L14.5 12L12 9.5L9.5 12L10.5 8L8 6H11L12 2Z" />
     </svg>
);

const Footer = () => {
     return (
          <div className="footer-wrapper padding-container">
               <footer className="footer-new" id="contact">
                    <div className="footer-top-section animate-fade-in-up">
                         <div className="footer-cta-left">
                              <p className="contact-label">Bog'lanish</p>
                              <h2 className="cta-headline">Loyihangizni boshlashga<br />tayyormisiz?</h2>
                              <p className="cta-description">
                                   Keling, birgalikda boshlaymiz. Menga so'rov yuboring va 12 soat ichida javob oling.
                              </p>
                              <a href="#contact" className="start-project-btn">
                                   <SparkleIcon /> LOYIHANI BOSHLASH
                              </a>
                         </div>
                         <div className="footer-cta-right">
                              <div className="agency-info-card">
                                   <h3>Flexy.agency</h3>
                                   <p>Veb-dizayn va Dasturiy ta'minot</p>
                                   <div className="availability-badge">
                                        <span className="green-dot"></span> Yangi loyihalar uchun ochiq
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="footer-map-section animate-fade-in-up delay-100">
                         <div className="map-header">
                              <div className="map-location-info">
                                   <p className="location-label">Manzil: Toshkent</p>
                                   <p className="address-text">Toshkent shahri, O'zbekiston, 100000</p>
                              </div>
                              <a href="https://maps.google.com/?q=Tashkent" target="_blank" rel="noreferrer" className="open-maps-link">
                                   Google Xaritada ochish
                              </a>
                         </div>
                         <div className="map-container">
                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95904.09344498522!2d69.17637845!3d41.28251255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                   width="100%"
                                   height="100%"
                                   style={{ border: 0 }}
                                   allowFullScreen=""
                                   loading="lazy"
                                   referrerPolicy="no-referrer-when-downgrade"
                                   title="Tashkent Map"
                              ></iframe>
                         </div>
                    </div>

                    <div className="footer-bottom-bar animate-fade-in-up delay-200">
                         <div className="bottom-left">
                              <span className="footer-logo">Flexy</span>
                              <span className="copyright">&copy; 2025</span>
                              <span className="dot-separator">•</span>
                              <a href="#">Maxfiylik siyosati</a>
                              <a href="#">Foydalanish shartlari</a>
                              <a href="#">Cookie sozlamalari</a>
                         </div>
                         <div className="bottom-right">
                              <div className="footer-nav">
                                   <a href="#services">Xizmatlar</a>
                                   <a href="#about">O'zim haqimda</a>
                                   <a href="#portfolio">Portfolio</a>
                                   <a href="#contact">Bog'lanish</a>
                              </div>
                              <div className="footer-socials">
                                   <a href="#"><FiLinkedin /></a>
                                   <a href="#"><FiFacebook /></a>
                                   <a href="#"><FiTwitter /></a>
                                   <a href="#"><FiInstagram /></a>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
