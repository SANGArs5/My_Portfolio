import React, { useState } from 'react';
import { ctaStackIcon, emailIcon, telegramIcon, telegramQr } from '../data/icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  return (
    <section id="contact" className="cta-section">
      <div className="cta-corner-circle top-left"></div>
      <div className="cta-corner-circle bottom-right"></div>

      <div className="container">
        <div className="cta-content">
          <div className="cta-icon-wrapper">
            <div className="cta-icon-box">
              <img src={ctaStackIcon} alt="Stack icon" />
            </div>
          </div>

          <span className="cta-subhead">Have a role or project in mind?</span>

          <h2 className="cta-heading">
            <span className="highlight-dark">Let's build something</span>
            <br />
            <span className="highlight-translucent">meaningful together.</span>
          </h2>

          <p className="cta-desc">
            I'm currently available for freelance work and internship opportunities.
          </p>

          {/* Contact Actions (Email + Telegram below) */}
          <div className="cta-contact-stack">
            {/* Email Button */}
            <button
              type="button"
              className="cta-contact-btn email-btn"
              onClick={handleCopyEmail}
              title="Click to copy email address"
            >
              <img src={emailIcon} alt="Email" width="19" height="19" />
              <span>{personalInfo.email}</span>
            </button>

            {copied && (
              <span className="copied-toast">✓ Email copied to clipboard!</span>
            )}

            {/* Telegram Button Below Email */}
            <a
              href={personalInfo.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-contact-btn telegram-btn"
              title={`Message on Telegram: ${personalInfo.telegramUsername}`}
            >
              <img src={telegramIcon} alt="Telegram" width="20" height="20" />
              <span>Telegram: {personalInfo.telegramUsername}</span>
            </a>

            {/* Telegram QR Code Card / Toggle */}
            <div className="telegram-qr-widget">
              <button
                type="button"
                className="qr-toggle-btn"
                onClick={() => setShowQr(!showQr)}
                aria-expanded={showQr}
              >
                <span>{showQr ? '▲ Hide Telegram QR Code' : '▼ Scan Telegram QR Code'}</span>
              </button>

              {showQr && (
                <div className="qr-popup-card">
                  <a
                    href={personalInfo.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Open in Telegram"
                  >
                    <img
                      src={telegramQr}
                      alt="Telegram @TAESANG_ARS QR Code"
                      className="qr-image"
                    />
                  </a>
                  <span className="qr-hint">Scan with camera or tap to message</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
