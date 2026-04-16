import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const reviews = [
     {
          id: 1,
          text: "Asrorbekga katta rahmat! Saytimizni noldan yaratib, har bir detalga alohida e'tibor qaratishdi. Mijozlarimiz saytdan foydalanish juda qulay ekanligini aytishmoqda. Haqiqiy o'z ishining ustasi!",
          name: "Azizbek Tursunov",
          username: "@azizb_t",
          avatar: "https://ui-avatars.com/api/?name=Azizbek+Tursunov&background=03BFB5&color=fff",
          platform: "Trustpilot"
     },
     {
          id: 2,
          text: "Biznesim uchun Telegram bot va tizim qildirgandim, kutganimdan ham a'lo darajada chiqdi. Hamma savollarga erinmasdan javob berganlari va ishni vaqtidan ertaroq bitirib berganlari uchun tashakkur!",
          name: "Nilufar Qosiyeva",
          username: "@nilufar_biznes",
          avatar: "https://ui-avatars.com/api/?name=Nilufar+Qosiyeva&background=111827&color=fff",
          platform: "Trustpilot"
     },
     {
          id: 3,
          text: "Dizayn juda zamonaviy, tezlik ajoyib. Har safar hamkorlik qilganimizda sifatni his qilamiz. O'zbekistonda bunaqa mas'uliyatli va kreativ IT mutaxassisni topish qiyin.",
          name: "Javohir Ergashev",
          username: "@javohirez",
          avatar: "https://ui-avatars.com/api/?name=Javohir+Ergashev&background=facc15&color=000",
          platform: "Trustpilot"
     }
];

const Testimonials = () => {
     const { t } = useLanguage();
     const localizedReviews = t('testimonials.reviews');
     const reviewsWithText = localizedReviews.map((review) => ({
          ...review,
          avatar: reviews.find((item) => item.id === review.id)?.avatar
     }));

     return (
          <section className="testimonials section" id="reviews">
               <div className="container">
                    <div className="testimonials-header animate-fade-in-up">
                         <div className="trust-badge">
                              <div className="trustpilot-icon-small" style={{ width: '20px', height: '20px', backgroundColor: '#03BFB5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '3px', fontSize: '12px' }}>★</div>
                              <span className="badge-text" style={{ marginLeft: '8px' }}>{t('testimonials.badge')}</span>
                         </div>
                         <h2 className="section-title">{t('testimonials.title')}</h2>
                         <div className="overall-rating">
                              <div className="stars">
                                   {[...Array(5)].map((_, i) => <FaStar key={i} className="star fill" color="#fbbc04" />)}
                              </div>
                              <span>{t('testimonials.overall')}</span>
                         </div>
                    </div>

                    <div className="testimonials-grid">
                         {reviewsWithText.map((review, index) => (
                              <div
                                   key={review.id}
                                   className="review-card animate-fade-in-up"
                                   style={{ animationDelay: `${(index % 3) * 100}ms` }}
                              >
                                   <div className="stars mb-4">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} className="star fill" color="#fbbc04" />)}
                                   </div>
                                   <p className="review-text">"{review.text}"</p>

                                   <div className="review-footer">
                                        <div className="reviewer-info">
                                             <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                                             <div>
                                                  <h4 className="reviewer-name">{review.name}</h4>
                                                  <span className="reviewer-username">{review.username}</span>
                                             </div>
                                        </div>
                                        {review.platform === 'Google' ? <FcGoogle size={24} /> : <div className="trustpilot-icon">★</div>}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Testimonials;
