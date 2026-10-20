import React from 'react';
import { footerGithubIcon, footerLinkedinIcon, telegramIcon } from '../data/icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* End Note & Collaboration Banner */}
      <div className="footer-closing-wrapper">
        <div className="container">
          <div className="footer-closing-card">
            <div className="closing-tag-pill">
              <span className="closing-sparkle">✦</span>
              <span>Open for Opportunities</span>
            </div>

            <h3 className="footer-closing-title">
              Thank you for visiting and I hope to connect soon for a future collaboration
            </h3>

            <div className="footer-availability-row">
              <span className="status-live-beacon"></span>
              <p className="footer-availability-text">
                I'm currently available for freelance work and internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Brand, Copyright, Social Links */}
      <div className="footer-container">
        <a href="#home" className="footer-brand" aria-label={`${personalInfo.initials} Portfolio Home`}>
          <span className="logo-text">{personalInfo.initials}</span>
          <span className="logo-dot"></span>
        </a>

        <p className="footer-copy">
          Designed and built with care · 2026
        </p>

        <div className="footer-socials">
          <a
            href={personalInfo.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="Telegram Profile"
            title={`Telegram: ${personalInfo.telegramUsername}`}
          >
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="GitHub Profile"
            title="GitHub: SANGArs5"
          >
            <img src={footerGithubIcon} alt="GitHub" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="LinkedIn Profile"
          >
            <img src={footerLinkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}
