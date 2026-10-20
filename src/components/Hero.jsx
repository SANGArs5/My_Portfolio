import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrowRightIcon } from '../data/icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - card.left) / card.width - 0.5) * 16;
    const y = ((e.clientY - card.top) / card.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot-wrapper">
                <span className="status-dot-pulse"></span>
              </span>
              <span className="status-text">{personalInfo.status}</span>
            </div>

            <h1 className="hero-heading">
              <span className="line-main">{personalInfo.heroHeadingLine1}</span>
              <span className="line-muted">{personalInfo.heroHeadingLine2}</span>
            </h1>

            <p className="hero-desc">{personalInfo.heroBio}</p>

            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={(e) => {
                  const target = document.getElementById('projects');
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                <span>Explore my work</span>
                <img src={arrowRightIcon} alt="" width="18" height="18" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  const target = document.getElementById('contact');
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-outline"
              >
                <span>Get in touch</span>
              </a>
            </div>

            <a
              href="#about"
              onClick={(e) => {
                const target = document.getElementById('about');
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hero-scroll-indicator"
              title="Scroll down to About section"
            >
              <span className="scroll-text">Scroll to discover</span>
              <div className="scroll-line">
                <div className="scroll-line-inner"></div>
              </div>
            </a>
          </div>

          {/* Right Illustration */}
          <div className="hero-illustration">
            <div className="orbit-circle outer"></div>
            <div className="orbit-circle inner"></div>
            <div className="orbit-dot orange"></div>
            <div className="orbit-dot lime"></div>

            {/* Floating React Pill */}
            <div className="floating-pill react-pill">
              <span>React</span>
            </div>

            {/* Floating Code Editor Window with 3D Mouse Tilt */}
            <div
              className="code-window-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) rotate(2deg)`,
              }}
            >
              <div className="code-window">
                <div className="code-header">
                  <div className="window-dots">
                    <span className="dot close"></span>
                    <span className="dot min"></span>
                    <span className="dot max"></span>
                  </div>
                  <span className="window-filename">portfolio.tsx</span>
                </div>

                <div className="code-body">
                  <div className="code-line">
                    <span className="syn-keyword">const</span>{' '}
                    <span className="syn-obj">developer = &#123;</span>
                  </div>
                  <div className="code-line indent">
                    <span className="syn-key">name: </span>
                    <span className="syn-val">"{personalInfo.name}"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="syn-key">focus: </span>
                    <span className="syn-val">"full-stack"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="syn-key">mindset: </span>
                    <span className="syn-val">"always learning"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="syn-key">passion: </span>
                    <span className="syn-val">"building for people"</span>
                  </div>
                  <div className="code-line">
                    <span className="syn-obj">&#125;</span>
                  </div>
                </div>

                <div className="code-footer">
                  <span className="status-label">Ready to build</span>
                  <span className="status-indicator"></span>
                </div>
              </div>
            </div>

            {/* Floating Node.js Pill */}
            <div className="floating-pill node-pill">
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
