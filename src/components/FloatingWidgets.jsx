import React from 'react';
import { FiShare2, FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWidgets.css';

const FloatingWidgets = () => {
     return (
          <>
               {/* Left Sidebar Widget */}
               <div className="floating-left">
                    <div className="left-widget-container animate-fade-in-up delay-200">
                         <button className="widget-btn-light">
                              <FiShare2 />
                         </button>

                         <div className="widget-black-bar">
                              <span>W.</span>
                              <span className="rotated-text">Nominee</span>
                         </div>

                         <button className="widget-btn-light">
                              <FiMail />
                         </button>
                    </div>
               </div>

               {/* Right Sidebar Widgets */}
               <div className="floating-right animate-fade-in-up delay-300">
                    <button className="widget-btn-dark">
                         <FiMessageCircle />
                    </button>

                    <button className="widget-btn-green">
                         <FaWhatsapp />
                    </button>

                    <button className="widget-btn-dark">
                         <FiPhone />
                    </button>
               </div>
          </>
     );
};

export default FloatingWidgets;
