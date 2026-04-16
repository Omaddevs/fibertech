import React, { useState, useEffect, useRef } from 'react';
import { FiShare2, FiMail, FiPhone, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import './FloatingWidgets.css';

const FloatingWidgets = () => {
     const [isShareOpen, setIsShareOpen] = useState(false);
     const shareRef = useRef(null);

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (shareRef.current && !shareRef.current.contains(event.target)) {
                    setIsShareOpen(false);
               }
          };
          document.addEventListener('mousedown', handleClickOutside);
          return () => document.removeEventListener('mousedown', handleClickOutside);
     }, []);

     return (
          <>
               {/* Left Sidebar Widget */}
               <div className="floating-left">
                    <div className="left-widget-container animate-fade-in-up delay-200" ref={shareRef}>
                         <div className="share-wrapper">
                              <button
                                   className={`widget-btn-light share-btn ${isShareOpen ? 'active' : ''}`}
                                   onClick={() => setIsShareOpen(!isShareOpen)}
                              >
                                   <FiShare2 />
                              </button>

                              <div className={`share-menu ${isShareOpen ? 'open' : ''}`}>
                                   <a href="#" className="share-item linkedin" title="LinkedIn">
                                        <FiLinkedin />
                                   </a>
                                   <a href="https://www.instagram.com/fibertech.uz?igsh=MXE1dGgxYW5ldWc2MA==" target="_blank" rel="noreferrer" className="share-item instagram" title="Instagram">
                                        <FiInstagram />
                                   </a>
                                   <a href="https://t.me/fibertech_uz" target="_blank" rel="noreferrer" className="share-item telegram" title="Telegram">
                                        <FaTelegramPlane />
                                   </a>
                                   <a href="#" className="share-item facebook" title="Facebook">
                                        <FiFacebook />
                                   </a>
                              </div>
                         </div>

                         <div className="widget-black-bar">
                              <span className="brand-f-floating">F.</span>
                              <div className="rotated-text">
                                   <span className="brand-fiber-floating">FIBER</span>
                                   <span className="brand-tech-floating">TECH</span>
                              </div>
                         </div>

                         <button className="widget-btn-light">
                              <FiMail />
                         </button>
                    </div>
               </div>

               {/* Right Sidebar Widgets */}
               <div className="floating-right animate-fade-in-up delay-300">
                    <button className="widget-btn-green">
                         <FiPhone />
                    </button>
               </div>
          </>
     );
};

export default FloatingWidgets;
