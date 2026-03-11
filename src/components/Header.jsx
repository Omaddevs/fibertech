import React, { useState, useEffect, useRef } from 'react';
import { FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('UZ');

  const langRef = useRef(null);

  const languages = [
    { code: 'UZ', flag: 'https://flagcdn.com/w40/uz.png', label: 'UZB' },
    { code: 'RU', flag: 'https://flagcdn.com/w40/ru.png', label: 'RUS' },
    { code: 'EN', flag: 'https://flagcdn.com/w40/gb.png', label: 'ENG' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentFlag = languages.find(l => l.code === currentLang)?.flag;

  const navItems = [
    { label: 'Xizmatlar', id: 'expertise' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Narxlar', id: 'pricing' },
    { label: 'Biz haqimizda', id: 'about' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Aloqa', id: 'contact' },
  ];

  return (
    <>
      <header className={`header animate-fade-in-up ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="logo" onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
            Wibify
          </div>

          <nav className="desktop-nav">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id} onClick={() => handleNavClick(item.id)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            {/* Removed desktop-only to show on all devices */}
            <button className="btn-black btn-taklif" onClick={() => handleNavClick('contact')}>Taklif</button>
            <button className="icon-btn theme-toggle">
              <FiMoon />
            </button>

            <div className="lang-dropdown-container" ref={langRef}>
              <button
                className="icon-btn lang-toggle"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              >
                <img src={currentFlag} alt={currentLang} />
              </button>

              {langDropdownOpen && (
                <div className="lang-dropdown-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <img src={lang.flag} alt={lang.code} />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="icon-btn mobile-menu-btn" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-header">
            <div className="logo">Wibify</div>
            <button className="icon-btn close-btn" onClick={toggleMobileMenu}>
              <FiX />
            </button>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-nav-links">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu-footer">
            <button className="btn-black full-width" onClick={() => handleNavClick('contact')}>
              Taklif olish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
