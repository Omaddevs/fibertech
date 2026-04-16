import React, { useState } from 'react';
import { FiChevronDown, FiMapPin, FiPenTool } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
     const [openIndex, setOpenIndex] = useState(0);
     const { t } = useLanguage();
     const faqs = t('faq.questions');

     const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index);
     };

     return (
          <section className="faq section" id="faq">
               <div className="container">
                    <div className="faq-wrapper animate-fade-in-up">
                         <div className="faq-header-new">
                             <h2 className="faq-title-big">{t('faq.title')}</h2>
                             <p className="faq-subtitle">{t('faq.subtitle')}</p>
                         </div>

                         <div className="faq-main-content">
                             <h3 className="faq-section-title">{t('faq.sectionTitle')}</h3>
                              <div className="faq-list">
                                   {faqs.map((faq, index) => (
                                        <div
                                             key={index}
                                             className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                             onClick={() => toggleFAQ(index)}
                                        >
                                             <div className="faq-question">
                                                  <h3>{faq.question}</h3>
                                                  <FiChevronDown className="faq-icon" />
                                             </div>
                                             <div className="faq-answer">
                                                  <p>{faq.answer}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         <div className="faq-footer-cards">
                              <div className="faq-footer-card light">
                                   <div className="card-title-row">
                                        <div className="icon-circle light-green">
                                             <FiMapPin className="card-icon-small" />
                                        </div>
                                        <h4>{t('faq.cards.localTitle')}</h4>
                                   </div>
                                   <p className="card-text">
                                        {t('faq.cards.localText')}
                                   </p>
                              </div>
                              <div className="faq-footer-card dark">
                                   <div className="card-title-row">
                                        <div className="icon-circle dark-gray">
                                             <FiPenTool className="card-icon-small white-icon" />
                                        </div>
                                        <h4>{t('faq.cards.customTitle')}</h4>
                                   </div>
                                   <p className="card-text">
                                        {t('faq.cards.customText')}
                                   </p>
                                   <a href="#contact" className="faq-link">{t('faq.cards.customLink')} &rarr;</a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default FAQ;
