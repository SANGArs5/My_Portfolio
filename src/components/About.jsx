import React, { useState } from 'react';
import { profilePhoto } from '../data/icons';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [photoTilt, setPhotoTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setPhotoTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setPhotoTilt({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div className="section-tag">
          <span className="tag-number">01</span>
          <span className="tag-title">About me</span>
          <div className="tag-line"></div>
        </div>

        <div className="about-editorial-grid">
          {/* Photo Frame Card */}
          <div
            className="about-photo-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(900px) rotateX(${photoTilt.y}deg) rotateY(${photoTilt.x}deg)`,
            }}
          >
            <div className="about-photo-card">
              <div className="photo-corner-accent top-left"></div>
              <div className="photo-corner-accent bottom-right"></div>
              
              <div className="photo-img-container">
                <img
                  src={profilePhoto}
                  alt={`${personalInfo.name} Portrait`}
                  className="profile-img"
                  loading="lazy"
                />
                <div className="photo-overlay-gradient"></div>
              </div>

              {/* Floating Profile Badge */}
              <div className="photo-floating-badge">
                <div className="badge-avatar-dot"></div>
                <div className="badge-text-group">
                  <span className="badge-name">{personalInfo.name}</span>
                  <span className="badge-sub">ITE Student @ RUPP</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="about-text-content">
            <h2 className="about-heading">
              <span className="dark">Curious by nature.</span>
              <span className="gray">Driven by craft.</span>
            </h2>

            <div className="about-text-block">
              <p className="lead-text">{personalInfo.aboutLead}</p>
              <p className="body-text">{personalInfo.aboutBody}</p>
            </div>

            {/* Quick Highlight Stats / Badges */}
            <div className="about-quick-stats">
              <div className="stat-pill">
                <span className="stat-number">4th</span>
                <span className="stat-label">Year ITE Engineering</span>
              </div>
              <div className="stat-pill">
                <span className="stat-number">RUPP</span>
                <span className="stat-label">Royal University</span>
              </div>
              <div className="stat-pill">
                <span className="stat-number">Full-Stack</span>
                <span className="stat-label">Web &amp; Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
