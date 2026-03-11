import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';

const Counter = ({ end, decimals = 0, duration = 2000, suffix = '', prefix = '' }) => {
     const [count, setCount] = useState(0);
     const countRef = useRef(null);

     useEffect(() => {
          let observer;
          let startTime;
          let animationFrame;

          const animateCount = (timestamp) => {
               if (!startTime) startTime = timestamp;
               const progress = timestamp - startTime;
               const percentage = Math.min(progress / duration, 1);

               const easing = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
               setCount(end * easing);

               if (percentage < 1) {
                    animationFrame = requestAnimationFrame(animateCount);
               } else {
                    setCount(end);
               }
          };

          const startAnimation = (entries) => {
               const [entry] = entries;
               if (entry.isIntersecting) {
                    startTime = null;
                    animationFrame = requestAnimationFrame(animateCount);
                    if (observer && countRef.current) observer.unobserve(countRef.current);
               }
          };

          if (countRef.current) {
               observer = new IntersectionObserver(startAnimation, { threshold: 0.5 });
               observer.observe(countRef.current);
          }

          return () => {
               if (animationFrame) cancelAnimationFrame(animationFrame);
               if (observer) observer.disconnect();
          };
     }, [end, duration]);

     return (
          <span ref={countRef}>
               {prefix}{Number(count).toFixed(decimals)}{suffix}
          </span>
     );
};

const Statistics = () => {
     return (
          <section className="statistics section" id="stats">
               <div className="container">
                    <div className="stats-dashboard animate-fade-in-up">
                         <div className="dashboard-grid-new">
                              <div className="stat-item">
                                   <div className="stat-value">
                                        <Counter end={92} duration={2000} suffix="+" />
                                   </div>
                                   <div className="stat-label-new">
                                        Tugallangan<br />loyihalar
                                   </div>
                              </div>
                              <div className="stat-item">
                                   <div className="stat-value">
                                        <Counter end={100} duration={2000} />
                                   </div>
                                   <div className="stat-label-new">
                                        PageSpeed<br />Score
                                   </div>
                              </div>
                              <div className="stat-item">
                                   <div className="stat-value text-primary">
                                        <Counter end={4.9} decimals={1} duration={2000} />
                                   </div>
                                   <div className="stat-label-new">
                                        Google<br />Baholash
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Statistics;
