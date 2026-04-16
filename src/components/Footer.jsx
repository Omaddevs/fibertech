import React, { useState } from 'react';
import { FiLinkedin, FiFacebook, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const SparkleIcon = () => (
     <svg className="btn-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6083 1.83851C11.8028 2.05315 11.979 2.27838 12.134 2.51138L12.5645 3.15876C13.5678 4.66723 15.011 5.86435 16.7115 6.60228L17.4877 6.93893C19.8653 7.97125 21.6508 9.94046 22.4284 12.3905C22.6229 12.1759 22.7991 11.9506 22.9542 11.7176L23.3847 11.0702C24.388 9.56177 25.8312 8.36465 27.5317 7.62672L28.3079 7.29007C30.6855 6.25775 32.471 4.28854 33.2486 1.83851C33.0541 2.05315 32.8779 2.27838 32.7228 2.51138L32.2923 3.15876C31.289 4.66723 29.8458 5.86435 28.1453 6.60228L27.3691 6.93893C24.9915 7.97125 23.206 9.94046 22.4284 12.3905C22.2339 12.1759 22.0577 11.9506 21.9026 11.7176C20.6931 10.1587 18.9197 9.07062 16.9038 8.64756L16.2736 8.51523C13.8824 8.01358 11.8658 6.46083 10.7483 4.28854C10.9427 4.0739 11.119 3.84867 11.274 3.61567L11.7045 2.96829C12.7078 1.45981 14.151 0.262696 15.8515 -0.475231L16.6277 -0.811883C14.2501 0.220436 12.4646 2.18965 11.687 4.63968C11.4925 4.85431 11.3163 5.07955 11.1612 5.31255C8.90563 8.24354 5.25996 9.87157 1.42841 9.6105V9.6105C5.02988 10.1472 8.41164 11.6669 10.9702 13.9213L11.6083 1.83851Z" />
          <path d="M12 2L13 6H16L13.5 8L14.5 12L12 9.5L9.5 12L10.5 8L8 6H11L12 2Z" />
     </svg>
);

const Footer = () => {
     const { t } = useLanguage();
     const [formData, setFormData] = useState({ name: '', phone: '' });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

     const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData((current) => ({ ...current, [name]: value }));
     };

     const handleSubmit = async (event) => {
          event.preventDefault();
          setIsSubmitting(true);
          setSubmitStatus({ type: '', message: '' });

          try {
               const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
               });

               const responseBody = await response.json().catch(() => ({}));

               if (!response.ok) {
                    throw new Error(responseBody.error || 'Request failed');
               }

               setFormData({ name: '', phone: '' });
               setSubmitStatus({ type: 'success', message: t('footer.success') });
          } catch (error) {
               setSubmitStatus({ type: 'error', message: error.message || t('footer.error') });
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <div className="footer-wrapper padding-container">
               <footer className="footer-new" id="contact">
                    <div className="footer-top-section animate-fade-in-up">
                         <div className="footer-cta-left">
                              <p className="contact-label">{t('footer.contactLabel')}</p>
                              <h2 className="cta-headline">{t('footer.title').split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2>
                              <p className="cta-description">
                                   {t('footer.subtitle')}
                              </p>
                              <form className="footer-contact-form" onSubmit={handleSubmit}>
                                   <div className="form-group">
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('footer.namePlaceholder')} required className="footer-input" />
                                   </div>
                                   <div className="form-group">
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('footer.phonePlaceholder')} required className="footer-input" />
                                   </div>
                                   <button type="submit" className="start-project-btn submit-btn">
                                        <SparkleIcon /> {isSubmitting ? t('footer.sending') : t('common.submit')}
                                   </button>
                                   {submitStatus.message && <p className={`form-status ${submitStatus.type}`}>{submitStatus.message}</p>}
                              </form>
                         </div>
                         <div className="footer-cta-right">
                              <div className="agency-info-card">
                                   <h3>FiberTech.agency</h3>
                                   <p>{t('footer.agencyText')}</p>
                                   <div className="availability-badge">
                                        <span className="green-dot"></span> {t('footer.availability')}
                                   </div>

                                   <div className="agency-contact-details">
                                        <a href="tel:+998877353636" className="agency-contact-link">
                                             <FiPhone /> +998 87 735 36 36
                                        </a>
                                        <a href="mailto:info@fibertech.uz" className="agency-contact-link">
                                             <FiMail /> info@fibertech.uz
                                        </a>
                                   </div>

                                   <div className="agency-social-links">
                                        <a href="https://t.me/fibertech_uz" target="_blank" rel="noreferrer" className="agency-social-icon telegram"><FaTelegramPlane /></a>
                                        <a href="https://www.instagram.com/fibertech.uz?igsh=MXE1dGgxYW5ldWc2MA==" target="_blank" rel="noreferrer" className="agency-social-icon instagram"><FiInstagram /></a>
                                        <a href="#" className="agency-social-icon facebook"><FiFacebook /></a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="footer-map-section animate-fade-in-up delay-100">
                         <div className="map-header">
                              <div className="map-location-info">
                                        <p className="location-label">{t('footer.locationLabel')}</p>
                                        <p className="address-text">{t('footer.address')}</p>
                              </div>
                              <a href="https://maps.google.com/?q=International+Agriculture+University,+Tashkent,+Uzbekistan" target="_blank" rel="noreferrer" className="open-maps-link">
                                   {t('footer.openMap')}
                              </a>
                         </div>
                         <div className="map-container" style={{ position: 'relative' }}>
                              <iframe
                                   src="https://maps.google.com/maps?q=International%20Agriculture%20University,%20Tashkent,%20Uzbekistan&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                   width="100%"
                                   height="100%"
                                   style={{ border: 0 }}
                                   allowFullScreen=""
                                   loading="lazy"
                                   referrerPolicy="no-referrer-when-downgrade"
                                   title="Tashkent Map"
                              ></iframe>
                              <div style={{
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  transform: 'translate(-50%, -100%)',
                                  pointerEvents: 'none',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  zIndex: 10
                              }}>
                                  <FaMapMarkerAlt size={56} color="#03BFB5" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.4))' }} />
                                  <div style={{ 
                                      background: '#03BFB5', 
                                      color: 'white', 
                                      padding: '4px 14px', 
                                      borderRadius: '20px', 
                                      fontSize: '0.9rem',
                                      fontWeight: '600',
                                      marginTop: '-2px',
                                      boxShadow: '0 4px 12px rgba(3, 191, 181, 0.4)',
                                      letterSpacing: '0.02em',
                                      border: '2px solid white'
                                  }}>
                                      {t('common.office')}
                                  </div>
                              </div>
                         </div>
                    </div>

                    <div className="footer-bottom-bar animate-fade-in-up delay-200">
                         <div className="bottom-left">
                              <div className="footer-logo" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--font-heading)', marginRight: '16px' }}>
                                   <span style={{ color: 'white' }}>Fiber</span><span style={{ color: '#03BFB5' }}>Tech</span>
                              </div>
                              <span className="copyright">&copy; {t('footer.copyright')}</span>
                         </div>
                         <div className="bottom-right">
                              <div className="footer-socials">
                                   <a href="#"><FiLinkedin /></a>
                                   <a href="#"><FiFacebook /></a>
                                   <a href="https://t.me/fibertech_uz" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
                                   <a href="https://www.instagram.com/fibertech.uz?igsh=MXE1dGgxYW5ldWc2MA==" target="_blank" rel="noreferrer"><FiInstagram /></a>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;
