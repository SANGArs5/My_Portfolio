import React, { useEffect, useState } from 'react';
import { githubIcon } from '../data/icons';

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
                  <span className="modal-screen-url">quizbehavior.app/teacher/my-quiz</span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-screen-gh-btn"
                    >
                      <img src={githubIcon} alt="" width="14" height="14" />
                      <span>View GitHub</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
                <div className="modal-screen-body">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="modal-full-screenshot"
                  />
                </div>
              </div>

              {/* Real Dashboard Metrics from Project Screenshot */}
              <div className="modal-stats-highlights">
                <div className="modal-stat-pill">
                  <span className="stat-pill-label">Total Quizzes</span>
                  <span className="stat-pill-value">5 Quizzes</span>
                </div>
                <div className="modal-stat-pill">
                  <span className="stat-pill-label">Active Monitoring</span>
                  <span className="stat-pill-value">3 Active</span>
                </div>
                <div className="modal-stat-pill">
                  <span className="stat-pill-label">Submissions Logged</span>
                  <span className="stat-pill-value">6 Submissions</span>
                </div>
                <div className="modal-stat-pill">
                  <span className="stat-pill-label">Average Score</span>
                  <span className="stat-pill-value">75% Avg</span>
                </div>
              </div>
            </div>
          )}

          <p className="modal-desc">{project.description}</p>

          <div className="tech-pills-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-pill">{tag}</span>
            ))}
          </div>

          {!project.image && project.githubUrl && (
            <div style={{ marginBottom: '20px' }}>
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
