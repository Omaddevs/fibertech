import React, { useState } from 'react';
import { FiChevronDown, FiMapPin, FiPenTool } from 'react-icons/fi';
import './FAQ.css';

const faqs = [
     {
          question: "Veb-sayt yaratish qancha vaqt oladi?",
          answer: "Loyiha murakkabligiga qarab odatda 2 dan 4 haftagacha vaqt ketadi. Dastlabki bosqichda aniq muddat belgilanadi."
     },
     {
          question: "Qanday platformalardan foydalanasiz?",
          answer: "Biz asosan React, Webflow, va Shopify platformalaridan foydalanamiz, chunki ular zamonaviy va tezkor."
     },
     {
          question: "SEO xizmatlari nimani o'z ichiga oladi?",
          answer: "SEO xizmatiga kalit so'zlarni tahlil qilish, sayt tezligini oshirish, on-page va technical SEO optimizatsiyasi kiradi."
     },
     {
          question: "To'lov jarayoni qanday amalga oshiriladi?",
          answer: "To'lov ikki qismga bo'linadi: loyiha boshlanishida 50% va ish to'liq topshirilgandan so'ng qolgan 50% to'lanadi."
     },
     {
          question: "Sayt ishga tushgach yordam berasizmi?",
          answer: "Albatta, biz barcha mijozlarimizga kamida 1 oylik bepul texnik qo'llab-quvvatlash xizmatini taqdim etamiz."
     }
];

const FAQ = () => {
     const [openIndex, setOpenIndex] = useState(0);

     const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index);
     };

     return (
          <section className="faq section" id="faq">
               <div className="container">
                    <div className="faq-wrapper animate-fade-in-up">
                         <div className="faq-header-new">
                              <h2 className="faq-title-big">FAQ.</h2>
                              <p className="faq-subtitle">Murakkab atamalarsiz tushunarli tilda. Eng muhim javoblar.</p>
                         </div>

                         <div className="faq-main-content">
                              <h3 className="faq-section-title">Bilish muhim</h3>
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
                                        <h4>O'zbekistonda mahalliy</h4>
                                   </div>
                                   <p className="card-text">
                                        Shaxsiy aloqa o'rnini hech narsa bosa olmaydi. Nomsiz call-markazlar emas, loyihangiz uchun bevosita mas'ul shaxslar.
                                   </p>
                              </div>
                              <div className="faq-footer-card dark">
                                   <div className="card-title-row">
                                        <div className="icon-circle dark-gray">
                                             <FiPenTool className="card-icon-small white-icon" />
                                        </div>
                                        <h4>Individual yondashuv?</h4>
                                   </div>
                                   <p className="card-text">
                                        Internet-do'konlar yoki murakkab biznes tizimlari uchun individual taklif ishlab chiqamiz.
                                   </p>
                                   <a href="#contact" className="faq-link">SO'ROV QOLDIRISH &rarr;</a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default FAQ;
