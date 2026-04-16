import React, { useEffect, useMemo, useState } from 'react';
import { FiArrowUpRight, FiTrendingUp } from 'react-icons/fi';
import './Portfolio.css';
import iauPortfolioImage from '../images/iau-portfolio.png';
import sportonWebappImage from '../images/sporton-webapp.png';
import osonuyjoyStartupImage from '../images/osonuyjoy-startup.png';
import osonuyjoyBotLogo from '../images/osonuyjoy-bot-logo.png';
import uznovaTvLogo from '../images/uznova-tv-logo.png';
import sportonBotLogo from '../images/sporton-bot-logo.png';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    id: 1,
    image: iauPortfolioImage,
    link: 'https://iau.uz/',
  },
  {
    id: 7,
    image: sportonWebappImage,
    link: 'https://www.sporton.uz/',
  },
  {
    id: 10,
    image: sportonBotLogo,
    link: 'https://www.sporton.uz/',
  },
  {
    id: 8,
    image: osonuyjoyStartupImage,
    link: '#',
  },
  {
    id: 11,
    image: osonuyjoyBotLogo,
    link: '#',
  },
  {
    id: 9,
    image: uznovaTvLogo,
    link: '#',
  }
];
const MOBILE_BREAKPOINT = 768;

const Portfolio = () => {
  const { t } = useLanguage();
  const categories = t('portfolio.filters');
  const localizedProjects = t('portfolio.projects');
  const getDefaultTabIndex = () => (typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT ? 1 : 0);

  const [activeTabIndex, setActiveTabIndex] = useState(getDefaultTabIndex);
  const enrichedProjects = useMemo(
    () => localizedProjects.map((project) => ({ ...project, ...projects.find((item) => item.id === project.id) })),
    [localizedProjects]
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

      setActiveTabIndex((currentTabIndex) => {
        if (isMobile && currentTabIndex === 0) {
          return 1;
        }

        if (!isMobile && currentTabIndex === 1) {
          return 0;
        }

        return currentTabIndex;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeTab = categories[activeTabIndex];

  const filteredProjects = useMemo(
    () => (activeTab === categories[0] ? enrichedProjects : enrichedProjects.filter((project) => project.category === activeTab)),
    [activeTab, categories, enrichedProjects]
  );

  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio-wrapper animate-fade-in-up">
        <div className="portfolio-header animate-fade-in-up">
          <div className="portfolio-title-group">
            <span className="badge">{t('portfolio.badge')}</span>
            <h2 className="section-title">{t('portfolio.title')}</h2>
            <p className="portfolio-subtitle">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="portfolio-insight">
            <span className="insight-label">
              <FiTrendingUp />
              {t('portfolio.insightLabel')}
            </span>
            <strong>{t('portfolio.insightTitle')}</strong>
            <p>{t('portfolio.insightText')}</p>
          </div>
        </div>

        <div className="portfolio-filters animate-fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTabIndex(categories.indexOf(cat))}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="portfolio-card animate-fade-in-up hover-zoom"
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <a href={project.link} className="card-image-wrapper" aria-label={project.title}>
                <img src={project.image} alt={project.title} className="card-image-bg" />
                <span className="card-year">{project.year}</span>
              </a>
              <div className="card-content">
                <div className="card-top">
                  <p className="card-category">{project.category}</p>
                  <a href={project.link} className="card-link" aria-label={`${project.title} havolasini ochish`}>
                    <FiArrowUpRight />
                  </a>
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-result">{project.result}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
