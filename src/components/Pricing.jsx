import React from 'react';
import { FiCheck, FiArrowRight, FiGlobe, FiTarget } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import './Pricing.css';

const websitePlans = [
     {
          id: 1,
          name: 'Landing sahifa',
          desc: 'Kontakt formasi va avtomatik elektron xatlar bilan professional sahifa. Tezkor onlayn.',
          badge: 'ARZON',
          badgeClass: 'badge-green',
          theme: 'light green-theme',
          oneTimePrice: '600',
          oldOneTime: '1.200',
          monthlyPrice: '49',
          monthlyDesc: '12 oylik muddat, xosting bilan',
          features: [
               '1 Sahifa (Landing)',
               'Kontakt formasi',
               'Avtomatik elektron xatlar',
               'Mobil moslashtirilgan'
          ],
          btnClass: 'btn-green',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 2,
          name: 'Starter',
          desc: 'Bir nechta sahifali ixcham veb-sayt. Yakka tadbirkorlar va kichik bizneslar uchun ideal.',
          badge: 'MASHHUR',
          badgeClass: 'badge-blue',
          theme: 'light blue-theme',
          oneTimePrice: '1.200',
          oldOneTime: '2.000',
          monthlyPrice: '89',
          monthlyDesc: '18 oylik muddat, texnik xizmat bilan',
          features: [
               '3 ta sahifagacha',
               'Kontakt formasi + E-maillar',
               'Boshlang\'ich SEO',
               'Responsive dizayn',
               'GDPRga mos'
          ],
          btnClass: 'btn-blue',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 3,
          name: 'Standard',
          desc: 'Professional talablar uchun mukammal boshlanish. O\'rnatilgan veb-saytlar uchun ideal.',
          theme: 'light standard-theme',
          oneTimePrice: '3.000',
          oldOneTime: '5.000',
          monthlyPrice: '150',
          monthlyDesc: '24 oylik muddat, texnik xizmat bilan',
          features: [],
          btnClass: 'btn-dark',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 4,
          name: 'Corporate',
          desc: 'Dizayn va funksionallikka yuqori talablar qo\'yadigan korxonalar uchun mukammal.',
          theme: 'light corporate-theme',
          oneTimePrice: '5.000',
          oldOneTime: '10.000',
          monthlyPrice: '250',
          monthlyDesc: '24 oylik muddat, texnik xizmat bilan',
          features: [],
          btnClass: 'btn-dark',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 5,
          name: 'Enterprise',
          desc: 'Kengaymoqchi bo\'lgan o\'rnatilgan korxonalar uchun. To\'liq yordam bilan High-End yechimlar.',
          theme: 'dark enterprise-theme',
          oneTimePrice: '10.000',
          oldOneTime: '30.000',
          monthlyPrice: '500',
          monthlyDesc: '24 oylik muddat, texnik xizmat bilan',
          features: [],
          btnClass: 'btn-white',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 6,
          name: 'Ultra Platinum',
          desc: 'Maksimal o\'sish uchun All-in-One AI-tizim. Eng yuqori darajadagi Premium-xizmat.',
          badge: 'PREMIUM',
          badgeClass: 'badge-gold',
          theme: 'dark platinum-theme',
          oneTimePrice: '40.000',
          oldOneTime: '150.000',
          monthlyPrice: '1.500',
          monthlyDesc: '24 oylik muddat, VIP qo\'llab-quvvatlash bilan',
          features: [],
          btnClass: 'btn-gold',
          btnText: 'Batafsil ko\'rish'
     }
];

const botPlans = [
     {
          id: 11,
          name: 'Asosiy Bot',
          desc: 'Mijozlar bilan aloqa qilish uchun oddiy va tezkor Telegram bot.',
          badge: 'KIRISH',
          badgeClass: 'badge-green',
          theme: 'light green-theme',
          oneTimePrice: '300',
          oldOneTime: '600',
          monthlyPrice: '29',
          monthlyDesc: '12 oylik muddat, server bilan',
          features: [
               'Menyu va tugmalar',
               'Avtomatik javoblar',
               'Foydalanuvchi ma\'lumotlarini yig\'ish',
               'Admin panel (oddiy)'
          ],
          btnClass: 'btn-green',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 12,
          name: 'E-commerce Bot',
          desc: 'Telegram orqali savdo qilish uchun to\'liq internet-magazin boti.',
          badge: 'MASHHUR',
          badgeClass: 'badge-blue',
          theme: 'light blue-theme',
          oneTimePrice: '800',
          oldOneTime: '1.500',
          monthlyPrice: '69',
          monthlyDesc: '18 oylik muddat, texnik yordam',
          features: [
               'Katalog va savatcha',
               'To\'lov tizimlari (Payme, Click)',
               'Buyurtmalar tarixi',
               'Kengaytirilgan Admin panel'
          ],
          btnClass: 'btn-blue',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 15,
          name: 'Bot + Web (Kompleks)',
          desc: 'Barcha tizimlarni mukammal integratsiya qilish (Veb, Bot va CRM).',
          badge: 'OPTIMAL',
          badgeClass: 'badge-gold',
          theme: 'dark enterprise-theme',
          oneTimePrice: '2.500',
          oldOneTime: '5.000',
          monthlyPrice: '450',
          monthlyDesc: 'Doimiy yordam va kuzatuv',
          features: [
               'Murakkab savdo boti',
               'Vebsayt bilan integratsiya',
               'Omborxona tizimi',
               'Premium yordam'
          ],
          btnClass: 'btn-white',
          btnText: 'Batafsil ko\'rish'
     }
];

const targetPlans = [
     {
          id: 13,
          name: 'Targeting (Start)',
          desc: 'Instagram va Facebookda aniq auditoriya uchun reklama kampaniyalari.',
          badge: 'YANGI BOzor',
          badgeClass: 'badge-green',
          theme: 'light standard-theme',
          oneTimePrice: '400',
          oldOneTime: '800',
          monthlyPrice: '150',
          monthlyDesc: 'Oylik byudjetsiz, xizmat haqi',
          features: [
               'Auditoriya tahlili',
               'Reklama bannerlari (3 ta)',
               'A/B testlash',
               'Oylik hisobotlar'
          ],
          btnClass: 'btn-dark',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 14,
          name: 'Targeting (Pro)',
          desc: 'Katta byudjetli va keng ko\'lamli reklama kampaniyalari. Qayta sotuv tahlili.',
          badge: 'MASHHUR',
          badgeClass: 'badge-blue',
          theme: 'light corporate-theme',
          oneTimePrice: '1.000',
          oldOneTime: '2.000',
          monthlyPrice: '350',
          monthlyDesc: 'Murakkab funnellar',
          features: [
               'Pixel o\'rnatish',
               'Retargeting',
               'Cheksiz kreativlar',
               'Kundalik optimizatsiya'
          ],
          btnClass: 'btn-blue',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 16,
          name: 'AI & SMM Kompleks',
          desc: 'Neyrotarmoqlar yordamida har kunlik postlar va avtomatlashtirilgan marketing.',
          badge: 'PREMIUM',
          badgeClass: 'badge-gold',
          theme: 'dark platinum-theme',
          oneTimePrice: '3.000',
          oldOneTime: '6.000',
          monthlyPrice: '800',
          monthlyDesc: '24 oylik muddat, VIP qo\'llab-quvvatlash',
          features: [
               'AI generatsiya qilingan konent',
               'To\'liq hisob boshqaruvi',
               'Influencer outreach',
               '24/7 Agent qo\'llab-quvvatlash'
          ],
          btnClass: 'btn-gold',
          btnText: 'Batafsil ko\'rish'
     }
];

const Pricing = () => {
     const [activeTab, setActiveTab] = React.useState('website');

     let currentPlans = websitePlans;
     if (activeTab === 'bot') currentPlans = botPlans;
     if (activeTab === 'target') currentPlans = targetPlans;

     return (
          <section className="pricing section" id="pricing">
               <div className="pricing-wrapper animate-fade-in-up">

                    {/* Header elements */}
                    <div className="pricing-header-top">
                         <h2 className="pricing-title">Narxlar. <span className="pricing-subtitle">Shaffof narxlar. ROI-birinchi yondashuv.</span></h2>
                         <div className="pricing-tabs">
                              <button
                                   className={`tab-btn ${activeTab === 'website' ? 'active' : 'inactive'}`}
                                   onClick={() => setActiveTab('website')}
                              >
                                   <FiGlobe className="tab-icon" /> Veb-saytlar
                              </button>
                              <button
                                   className={`tab-btn ${activeTab === 'bot' ? 'active' : 'inactive'}`}
                                   onClick={() => setActiveTab('bot')}
                              >
                                   <FaRobot className="tab-icon" /> Telegram Bot
                              </button>
                              <button
                                   className={`tab-btn ${activeTab === 'target' ? 'active' : 'inactive'}`}
                                   onClick={() => setActiveTab('target')}
                              >
                                   <FiTarget className="tab-icon" /> Targeting
                              </button>
                         </div>
                    </div>

                    {/* Steps box */}
                    <div className="pricing-steps-box animate-fade-in-up delay-100">
                         <div className="step-item">
                              <div className="step-number black">1</div>
                              <div className="step-text">
                                   <strong>Bir martalik to'lov</strong>
                                   <p>Loyiha to'g'ridan-to'g'ri to'lanadi – siz darhol egasisiz.</p>
                              </div>
                         </div>
                         <div className="step-divider"></div>
                         <div className="step-item">
                              <div className="step-number green">2</div>
                              <div className="step-text">
                                   <strong>Oylik ijaraga olish</strong>
                                   <p>Xizmatni uzoq muddatga ijaraga oling – texnik xizmat va yangilanishlar bilan.</p>
                              </div>
                         </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="pricing-grid">
                         {currentPlans.map((plan, index) => (
                              <div
                                   key={plan.id}
                                   className={`price-card ${plan.theme} animate-fade-in-up`}
                                   style={{ animationDelay: `${(index % 3) * 100}ms` }}
                              >
                                   <div className="card-inner">
                                        <div className="card-top-header">
                                             <h3 className="plan-name">{plan.name}</h3>
                                             {plan.badge && <span className={`plan-badge ${plan.badgeClass}`}>{plan.badge}</span>}
                                        </div>

                                        <p className="plan-desc">{plan.desc}</p>

                                        {/* One time price section */}
                                        <div className="price-section block-one-time">
                                             <span className="price-label">BIR MARTALIK TO'LOV</span>
                                             <div className="price-values">
                                                  <span className="current-price">{plan.oneTimePrice}$</span>
                                                  <span className="old-price">– {plan.oldOneTime}$</span>
                                             </div>
                                        </div>

                                        <div className="price-divider">
                                             <span>yoki ijara</span>
                                        </div>

                                        {/* Monthly price section */}
                                        <div className="price-section block-monthly">
                                             <span className="price-label">OYLIK</span>
                                             <div className="price-values">
                                                  <span className="current-price-monthly">dan {plan.monthlyPrice}$</span>
                                                  <span className="period-suffix"> / Oy</span>
                                             </div>
                                             <p className="monthly-desc">{plan.monthlyDesc}</p>
                                        </div>

                                        {/* Features list */}
                                        {plan.features.length > 0 && (
                                             <ul className="plan-features">
                                                  {plan.features.map((feature, i) => (
                                                       <li key={i}>
                                                            <FiCheck className="feature-check" />
                                                            <span>{feature}</span>
                                                       </li>
                                                  ))}
                                             </ul>
                                        )}

                                        {/* Spacer to push button to bottom if list is empty or short */}
                                        <div style={{ flexGrow: 1 }}></div>

                                        <div className="card-btn-container">
                                             <button className={`price-btn ${plan.btnClass}`}>
                                                  {plan.btnText} <FiArrowRight className="btn-arrow" />
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Footer info */}
                    <div className="pricing-footer animate-fade-in-up delay-300">
                         <p className="footer-text">Bepul dastlabki maslahat • 12 soat ichida javob kafolatlangan • Majburiyatsiz taklif</p>
                         <button className="how-it-works-btn">
                              Men qanday ishlayman <FiArrowRight className="btn-arrow" />
                         </button>
                    </div>

               </div>
          </section>
     );
};

export default Pricing;
