import React from 'react';
import './Partners.css';
import iauPartnerLogo from '../images/iau-partner-logo.png';

const partners = [
  { name: 'International Agriculture University', accent: 'teal', logo: iauPartnerLogo, site: 'iau.uz' },
  { name: 'SportON', accent: 'blue', site: 'sporton.uz' },
  { name: 'OsonUyJoy', accent: 'violet', site: 'osonuyjoy.uz' },
  { name: 'UznovaTV', accent: 'green', site: 't.me/uznovatvbot' },
  { name: 'FiberTech Agency', accent: 'cyan', site: 'fibertech.uz' },
  { name: 'Startup Hub Uzbekistan', accent: 'teal', site: 'startuphub.uz' },
  { name: 'Yunusobod Innovation Center', accent: 'blue', site: 'yunusobod.uz' },
  { name: 'Qibray Education Labs', accent: 'violet', site: 'qibrayedu.uz' },
  { name: 'Digital Campus Group', accent: 'green', site: 'digitalcampus.uz' },
  { name: 'Agro Data Systems', accent: 'cyan', site: 'agrodata.uz' },
  { name: 'Smart Retail Team', accent: 'teal', site: 'smartretail.uz' },
  { name: 'Fast Product Studio', accent: 'blue', site: 'fastproduct.uz' }
];

const Partners = () => {
  const getInitials = (name) =>
    name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();

  return (
    <section className="partners section" id="partners">
      <div className="partners-wrapper animate-fade-in-up">
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.name}>
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="partner-logo-image" />
              ) : (
                <span className={`partner-logo ${partner.accent}`}>{getInitials(partner.name)}</span>
              )}
              <div className="partner-content">
                <span className="partner-name">{partner.name}</span>
                <span className="partner-site">{partner.site}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
