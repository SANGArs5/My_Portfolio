import React, { useState, useEffect } from 'react';
import { talkArrowIcon, githubIcon, telegramIcon } from '../data/icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header className={`site-header figma-header ${scrolled ? 'scrolled-header' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo from Figma: TS with orange dot */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="brand-logo-figma"
          aria-label="Sang TEY Home"
        >
          <span className="brand-letters">TS</span>
          <span className="brand-dot-orange" aria-hidden="true"></span>
        </a>

        {/* Center Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="active-dot-indicator" aria-hidden="true"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Header Actions: Socials & Let's talk */}
        <div className="header-actions">
          <a
            href={personalInfo.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn telegram-btn"
            aria-label="Telegram"
            title={`Telegram: ${personalInfo.telegramUsername}`}
          >
            <img src={telegramIcon} alt="Telegram" width="18" height="18" />
          </a>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn github-btn"
            aria-label="GitHub Profile"
            title="GitHub: SANGArs5"
          >
            <img src={githubIcon} alt="GitHub" width="18" height="18" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-lets-talk"
          >
            <span>Let's talk</span>
            <img src={talkArrowIcon} alt="" width="16" height="16" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer figma-drawer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && <span className="mobile-active-marker"></span>}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mobile-talk-btn"
          >
            <span>Let's talk</span>
            <img src={talkArrowIcon} alt="" width="16" height="16" />
          </a>
        </div>
      )}
    </header>
  );
}
