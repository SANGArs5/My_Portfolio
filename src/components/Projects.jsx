import React from 'react';
import { externalLinkIcon, githubIcon } from '../data/icons';
import { projectsList } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        <div className="section-tag">
          <span className="tag-number">03</span>
          <span className="tag-title">Work experience / Projects</span>
          <div className="tag-line"></div>
        </div>

        <div className="section-header-grid">
          <h2 className="section-main-heading">
            Practical work with real outcomes.
          </h2>
          <p className="section-intro-text">
            Full-stack and mobile projects focused on solving real problems with dependable, user-friendly technology.
          </p>
        </div>

        <div className="projects-list">
          {projectsList.map((project) => (
            <article key={project.id} className="project-card">
              <div className={`project-visual ${project.colorTheme}`}>
                <span className="project-visual-index">{project.id}</span>
                <div className={`mockup-wrapper ${project.previewVariant}`}>
                  {project.id === '01' && project.image ? (
                    /* Clean & Creative QuizBehavior Full Dashboard Browser Mockup */
                    <div className="browser-mockup quizbehavior-dashboard-mockup">
                      <div className="mockup-header">
                        <div className="mockup-header-left">
                          <span className="mockup-dot accent"></span>
                          <span className="mockup-dot subtle"></span>
                          <span className="mockup-dot subtle"></span>
                        </div>
                        <div className="mockup-url-pill">
                          <span className="url-lock">🔒</span> quizbehavior.app/teacher/my-quiz
                        </div>
                        <div className="mockup-live-indicator">
                          <span className="live-dot-pulse"></span>
                          <span>Live</span>
                        </div>
                      </div>

                      <div className="mockup-dashboard-viewport">
                        <img
                          src={project.image}
                          alt="QuizBehavior Teacher Dashboard"
                          className="quizbehavior-dashboard-img"
                        />
                        {/* Creative Floating Glassmorphic Badges */}
                        <div className="floating-metric-badge badge-top-right">
                          <span className="badge-tag">EXAM CODE</span>
                          <span className="badge-text">Y3F3RH • Web Security</span>
                        </div>
                        <div className="floating-metric-badge badge-bottom-left">
                          <span className="badge-pulse-indicator"></span>
                          <span className="badge-text">Real-Time Behavior Proctoring</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Default Abstract Mockup */
                    <div className="browser-mockup">
                      <div className="mockup-header">
                        <span className="mockup-dot accent"></span>
                        <span className="mockup-dot subtle"></span>
                        <span className="mockup-dot subtle"></span>
                      </div>
                      <div className="mockup-body">
                        <div className="mockup-sidebar"></div>
                        <div className="mockup-content">
                          <div className={`mockup-bar-accent ${project.accentColor}`}></div>
                          <div className="mockup-bar-dark"></div>
                          <div className="mockup-cards-row">
                            <div className="mockup-card-placeholder"></div>
                            <div className="mockup-card-placeholder"></div>
                            <div className="mockup-card-placeholder"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="project-info">
                <div className="project-category-row">
                  <span className="project-category">{project.category}</span>
                  {project.subtitle && (
                    <span className="project-subtitle-badge">{project.subtitle}</span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-pills-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">{tag}</span>
                  ))}
                </div>

                <div className="project-actions-row">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github-pill"
                      title="View GitHub Repository"
                    >
                      <img src={githubIcon} alt="" width="16" height="16" />
                      <span>View GitHub</span>
                      <span className="github-arrow">↗</span>
                    </a>
                  )}

                  <button
                    type="button"
                    className="project-link"
                    onClick={() => onOpenModal && onOpenModal(project)}
                  >
                    <span>Discuss this project</span>
                    <img src={externalLinkIcon} alt="" width="17" height="17" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
