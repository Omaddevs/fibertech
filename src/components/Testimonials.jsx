import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Testimonials.css';

const reviews = [
     {
          id: 1,
          text: "Ular bizning veb-saytimizni to'liq yangilashdi. Natijada konversiyalar 40% ga oshdi. Juda professional jamoa, hammaga tavsiya qilaman!",
          name: "Sardor Karimov",
          username: "@sardork",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          platform: "Google"
     },
     {
          id: 2,
          text: "Webflow va SEO bo'yicha haqiqiy mutaxassislar. Bizning saytimiz Google qidiruvlarida 1-sahifaga chiqdi.",
          name: "Malika Aliyeva",
          username: "@malikadesign",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          platform: "Trustpilot"
     },
     {
          id: 3,
          text: "Ajoyib dizayn va tezkor ishlash! Bizning startapimiz uchun mukammal landing page yaratib berishdi.",
          name: "Jasur Rahimov",
          username: "@jasdev",
          avatar: "https://randomuser.me/api/portraits/men/67.jpg",
          platform: "Google"
     }
];

const Testimonials = () => {
     return (
          <section className="testimonials section" id="reviews">
               <div className="container">
                    <div className="testimonials-header animate-fade-in-up">
                         <div className="trust-badge">
                              <FcGoogle size={20} />
                              <span className="badge-text">Google Reviews</span>
                         </div>
                         <h2 className="section-title">Mijozlarimiz nima deydi</h2>
                         <div className="overall-rating">
                              <div className="stars">
                                   {[...Array(5)].map((_, i) => <FaStar key={i} className="star fill" color="#fbbc04" />)}
                              </div>
                              <span>4.9/5 (120+ sharhlar)</span>
                         </div>
                    </div>

                    <div className="testimonials-grid">
                         {reviews.map((review, index) => (
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
