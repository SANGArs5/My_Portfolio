import React, { useEffect, useState } from 'react';
import { githubIcon, figmaIcon } from '../data/icons';

export default function ProjectModal({ project, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-kicker">{project.category}</span>
            <h3 className="modal-heading-title">{project.title}</h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {project.image && (
            <div className="modal-project-preview-full">
              <div className="modal-preview-screen">
                <div className="modal-screen-header">
                  <div className="modal-screen-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="modal-screen-url">
                    {project.urlDisplay || 'quizbehavior.app/teacher/my-quiz'}
                  </span>
                  <div className="modal-screen-actions">
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-screen-figma-btn"
                        title="View Figma Design"
                      >
                        <img src={figmaIcon} alt="" width="13" height="13" />
                        <span>Figma</span>
                        <span>↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-screen-gh-btn"
                        title="View GitHub Repository"
                      >
                        <img src={githubIcon} alt="" width="13" height="13" />
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className={`modal-screen-body ${project.deviceType === 'mobile' ? 'modal-screen-mobile-container' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={project.deviceType === 'mobile' ? 'modal-mobile-screenshot' : 'modal-full-screenshot'}
                  />
                </div>
              </div>

              {/* Dynamic Dashboard Metrics from Project Screenshot */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="modal-stats-highlights">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="modal-stat-pill">
                      <span className="stat-pill-label">{metric.label}</span>
                      <span className="stat-pill-value">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <p className="modal-desc">{project.description}</p>

          {project.featuresList && (
            <div className="modal-features-section">
              <h4 className="modal-features-heading">Included Features:</h4>
              <div className="modal-features-grid">
                {project.featuresList.map((feat) => (
                  <div key={feat.name} className="modal-feature-card">
                    <span className="modal-feature-name">{feat.name}</span>
                    <span className="modal-feature-desc">{feat.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="tech-pills-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-pill">{tag}</span>
            ))}
          </div>

          {!project.image && (project.githubUrl || project.figmaUrl) && (
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-github-link"
                >
                  <img src={githubIcon} alt="" width="16" height="16" />
                  <span>View Repository on GitHub</span>
                  <span className="github-arrow">↗</span>
                </a>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-github-link"
                >
                  <img src={figmaIcon} alt="" width="16" height="16" />
                  <span>View Design on Figma</span>
                  <span className="github-arrow">↗</span>
                </a>
              )}
            </div>
          )}

          {formSubmitted ? (
            <div className="modal-success-state">
              <span className="success-icon">✓</span>
              <h4>Thank you!</h4>
              <p>Your message regarding {project.title} has been received.</p>
            </div>
          ) : (
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-form-heading">Send a message about this project:</div>
              <input type="text" placeholder="Your Name" required autoFocus />
              <input type="email" placeholder="Your Email Address" required />
              <textarea
                placeholder={`Tell me what you'd like to collaborate on or discuss regarding ${project.title}...`}
                required
              ></textarea>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
