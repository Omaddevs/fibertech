import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './Portfolio.css';

const projects = [
     { id: 1, title: 'Zamonaviy E-commerce', category: 'Webflow', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80', tags: ['Webflow', 'E-commerce'] },
     { id: 2, title: 'Raqamli Agentlik', category: 'Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', tags: ['Design', 'UI/UX'] },
     { id: 3, title: 'Ko\'chmas Mulk Portali', category: 'SEO', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80', tags: ['SEO', 'Marketing'] },
     { id: 4, title: 'SaaS Platforma', category: 'Webflow', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', tags: ['Webflow', 'SaaS'] },
     { id: 5, title: 'Portfolio Veb-sayt', category: 'Design', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80', tags: ['Design', 'Branding'] },
     { id: 6, title: 'Tibbiyot Markazi', category: 'SEO', image: 'https://images.unsplash.com/photo-1576091160550-2173dba99401?auto=format&fit=crop&q=80', tags: ['SEO', 'Webflow'] },
];

const categories = ['Barchasi', 'Webflow', 'Design', 'SEO'];

const Portfolio = () => {
     const [activeTab, setActiveTab] = useState('Barchasi');

     const filteredProjects = activeTab === 'Barchasi'
          ? projects
          : projects.filter(p => p.category === activeTab);

     return (
          <section className="portfolio section" id="portfolio">
               <div className="portfolio-wrapper animate-fade-in-up">
                    <div className="portfolio-header animate-fade-in-up">
                         <div className="portfolio-title-group">
                              <span className="badge">Muvaffaqiyatli loyihalar</span>
                              <h2 className="section-title">Bizning ishlarimiz</h2>
                         </div>

                         <div className="portfolio-filters">
                              {categories.map((cat) => (
                                   <button
                                        key={cat}
                                        className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                                        onClick={() => setActiveTab(cat)}
                                   >
                                        {cat}
                                   </button>
                              ))}
                         </div>
                    </div>

                    <div className="portfolio-grid">
                         {filteredProjects.map((project, index) => (
                              <div
                                   key={project.id}
                                   className="portfolio-card animate-fade-in-up"
                                   style={{ animationDelay: `${(index % 3) * 100}ms` }}
                              >
                                   <div className="card-image-wrapper">
                                        <img src={project.image} alt={project.title} className="card-image" />
                                        <div className="card-overlay">
                                             <button className="view-btn"><FiArrowUpRight size={24} /></button>
                                        </div>
                                   </div>
                                   <div className="card-content">
                                        <div className="card-tags">
                                             {project.tags.map(tag => (
                                                  <span key={tag} className="card-tag">{tag}</span>
                                             ))}
                                        </div>
                                        <h3 className="card-title">{project.title}</h3>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="portfolio-footer animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                         <button className="btn btn-outline">Barcha loyihalarni ko'rish</button>
                    </div>
               </div>
          </section>
     );
};

export default Portfolio;
