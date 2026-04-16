import React from 'react';
import { FiCheck, FiArrowRight, FiGlobe, FiTarget } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

const websitePlans = [
     {
          id: 1,
          name: 'Landing sahifa',
          desc: 'Kontakt formasi va avtomatik elektron xatlar bilan professional sahifa. Tezkor onlayn.',
          badge: 'ARZON',
          badgeClass: 'badge-green',
          theme: 'light green-theme',
          oneTimePrice: '150',
          oldOneTime: '300',
          monthlyPrice: '15',
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
          oneTimePrice: '300',
          oldOneTime: '500',
          monthlyPrice: '30',
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
          name: 'Katalog Veb-sayt',
          desc: 'Guvohnomalar va katalog uchun kengaytirilgan ko\'rinish. Kichik bizneslar uchun optimal.',
          theme: 'light standard-theme',
          oneTimePrice: '600',
          oldOneTime: '1.000',
          monthlyPrice: '50',
          monthlyDesc: '24 oylik muddat, texnik xizmat bilan',
          features: [
               '10 ta sahifagacha',
               'Mahsulotlar katalogi',
               'Blog yoki yangiliklar',
               'Tezkor yuklanish tezligi',
          ],
          btnClass: 'btn-dark',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 4,
          name: 'E-commerce (Do\'kon)',
          desc: 'To\'liq onlayn savdo maydonchasi. Payme, Click va boshqa to\'lovlar integratsiyalangan.',
          theme: 'light corporate-theme',
          oneTimePrice: '1.200',
          oldOneTime: '2.000',
          monthlyPrice: '100',
          monthlyDesc: '24 oylik muddat, to\'liq server xizmati bilan',
          features: [
               'Cheksiz mahsulotlar',
               'To\'lov tizimlari (Payme, Click)',
               'Kengaytirilgan SEO',
               'Telegram bot integratsiya'
          ],
          btnClass: 'btn-dark',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 5,
          name: 'Premium Portal',
          desc: 'Kengayish niyatidagi o\'rnatilgan korxonalar. CRM tizimlar bilan uzviy bog\'langan portallar.',
          theme: 'dark enterprise-theme',
          oneTimePrice: '2.500',
          oldOneTime: '4.000',
          monthlyPrice: '200',
          monthlyDesc: '24 oylik muddat, VIP administrator bilan',
          features: [
               'Murakkab funksional',
               'CRM bilan integratsiya',
               'Ko\'p tilli tizim (UZ, RU, EN)',
               'To\'liq analitika burchagi'
          ],
          btnClass: 'btn-white',
          btnText: 'Batafsil ko\'rish'
     },
     {
          id: 6,
          name: 'AI & ERP Tizim',
          desc: 'Korxona uchun eng yuqori darajada avtomatlashtirilgan sun\'iy intellekt va boshqaruv tizimi.',
          badge: 'PREMIUM',
          badgeClass: 'badge-gold',
          theme: 'dark platinum-theme',
          oneTimePrice: '5.000',
          oldOneTime: '8.000',
          monthlyPrice: '400',
          monthlyDesc: 'Cheksiz muddat, VIP qo\'llab-quvvatlash bilan',
          features: [
               'Barcha bo\'limlarni avtomatlashtirish',
               'Sun\'iy Intellekt asistentlari',
               'Xodimlar va moliyani boshqarish',
               'Shaxsiy mobil ilova'
          ],
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
          oneTimePrice: '80',
          oldOneTime: '150',
          monthlyPrice: '10',
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
          oneTimePrice: '250',
          oldOneTime: '400',
          monthlyPrice: '25',
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
          oneTimePrice: '500',
          oldOneTime: '1.000',
          monthlyPrice: '50',
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
          oneTimePrice: '50',
          oldOneTime: '100',
          monthlyPrice: '100',
          monthlyDesc: '1 ta loyihani to\'liq boshqarish',
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
          oneTimePrice: '150',
          oldOneTime: '300',
          monthlyPrice: '250',
          monthlyDesc: 'Murakkab funnellar va retargeting',
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
          name: 'SMM & Targeting Kompleks',
          desc: 'Biznesingizning barcha ijtimoiy tarmoqlarini to\'liq yuritish va reklamani nazorat qilish.',
          badge: 'PREMIUM',
          badgeClass: 'badge-gold',
          theme: 'dark platinum-theme',
          oneTimePrice: '300',
          oldOneTime: '500',
          monthlyPrice: '450',
          monthlyDesc: 'Kontent-reja, video montaj va SMM',
          features: [
               'Reels va videorolik olish',
               'To\'liq hisob boshqaruvi',
               'Sotuvlarni monitoring qilish',
               '24/7 Agent qo\'llab-quvvatlash'
          ],
          btnClass: 'btn-gold',
          btnText: 'Batafsil ko\'rish'
     }
];

const Pricing = () => {
     const { t } = useLanguage();
     const [activeTab, setActiveTab] = React.useState(null);
     const localizedWebsitePlans = t('pricing.websitePlans');
     const localizedBotPlans = t('pricing.botPlans');
     const localizedTargetPlans = t('pricing.targetPlans');

     const websitePlansWithText = React.useMemo(
          () => websitePlans.map((plan) => ({ ...plan, ...localizedWebsitePlans.find((item) => item.id === plan.id) })),
          [localizedWebsitePlans]
     );
     const botPlansWithText = React.useMemo(
          () => botPlans.map((plan) => ({ ...plan, ...localizedBotPlans.find((item) => item.id === plan.id) })),
          [localizedBotPlans]
     );
     const targetPlansWithText = React.useMemo(
          () => targetPlans.map((plan) => ({ ...plan, ...localizedTargetPlans.find((item) => item.id === plan.id) })),
          [localizedTargetPlans]
     );

     let currentPlans = [];
     if (activeTab === 'website') currentPlans = websitePlansWithText;
     if (activeTab === 'bot') currentPlans = botPlansWithText;
     if (activeTab === 'target') currentPlans = targetPlansWithText;

     return (
          <section className="pricing section" id="pricing">
               <div className="pricing-wrapper animate-fade-in-up">

                    {/* Header elements */}
                    <div className="pricing-header-top">
                         <h2 className="pricing-title">{t('pricing.title')} <span className="pricing-subtitle">{t('pricing.subtitle')}</span></h2>
                         <div className="pricing-tabs">
                              <button
                                   className={`tab-btn ${activeTab === 'website' ? 'active' : 'inactive'}`}
                                   onClick={() => setActiveTab('website')}
                              >
                                   <FiGlobe className="tab-icon" /> {t('pricing.tabs.website')}
                              </button>
                              <button
                                   className={`tab-btn ${activeTab === 'bot' ? 'active' : 'inactive'}`}
                                   onClick={() => setActiveTab('bot')}
                              >
                                   <FaRobot className="tab-icon" /> {t('pricing.tabs.bot')}
                              </button>
                              <button
                                   className={`tab-btn ${activeTab === 'target' ? 'active' : 'inactive'}`}
                                   onClick={() => setActiveTab('target')}
                              >
                                   <FiTarget className="tab-icon" /> {t('pricing.tabs.target')}
                              </button>
                         </div>
                    </div>

                    {/* Content Section rendered only after selecting a tab */}
                    {activeTab && (
                         <>
                              {/* Steps box */}
                              <div className="pricing-steps-box animate-fade-in-up delay-100">
                                   <div className="step-item">
                                        <div className="step-number black">1</div>
                                        <div className="step-text">
                                             <strong>{t('pricing.steps.title')}</strong>
                                             <p>{t('pricing.steps.text')}</p>
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
                                                       <span className="price-label">{t('pricing.oneTimeLabel')}</span>
                                                       <div className="price-values">
                                                            <span className="current-price">{plan.oneTimePrice}$</span>
                                                            <span className="old-price">– {plan.oldOneTime}$</span>
                                                       </div>
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
                         </>
                    )}

                    {/* Footer info */}
                    <div className="pricing-footer animate-fade-in-up delay-300">
                         <p className="footer-text">{t('pricing.footerText')}</p>
                         <button className="how-it-works-btn">
                              {t('pricing.howIWork')} <FiArrowRight className="btn-arrow" />
                         </button>
                    </div>

               </div>
          </section>
     );
};

export default Pricing;
