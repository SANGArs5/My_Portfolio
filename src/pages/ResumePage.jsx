import React from 'react';
import Skills from '../components/Skills';
import { githubIcon } from '../data/icons';
import { personalInfo } from '../data/portfolioData';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-view resume-page-view">
      {/* Technical Skills 4-Card Grid */}
      <Skills />

      {/* Interactive Resume Card & Download Action */}
      <section className="resume-cv-section">
        <div className="container">
          <div className="resume-summary-card">
            <div className="resume-card-header">
              <div className="resume-header-info">
                <span className="resume-status-badge">AVAILABLE FOR HIRE</span>
                <h2 className="resume-person-name">{personalInfo.name}</h2>
                <p className="resume-person-title">
                  Full-Stack Web &amp; Mobile Developer &middot; Final-Year ITE Student @ RUPP
                </p>
              </div>

              <div className="resume-card-actions">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="btn-primary resume-action-btn print-btn"
                  title="Print or Save as PDF"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  <span>Print / Save PDF</span>
                </button>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline resume-action-btn"
                >
                  <img src={githubIcon} alt="" width="18" height="18" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="resume-details-grid">
              <div className="resume-detail-col">
                <h4 className="resume-col-title">Education</h4>
                <div className="resume-item">
                  <span className="resume-item-period">2023 &mdash; Present</span>
                  <h5 className="resume-item-name">Royal University of Phnom Penh (RUPP)</h5>
                  <p className="resume-item-desc">Bachelor of Information Technology Engineering (ITE) &middot; Year 4</p>
                </div>
                <div className="resume-item">
                  <span className="resume-item-period">2017 &mdash; 2023</span>
                  <h5 className="resume-item-name">Angkor High School, Siem Reap</h5>
                  <p className="resume-item-desc">Baccalaureate II (High School Diploma)</p>
                </div>
              </div>

              <div className="resume-detail-col">
                <h4 className="resume-col-title">Core Competencies</h4>
                <ul className="resume-skills-checklist">
                  <li><strong>Frontend:</strong> React.js, Next.js, Vue.js, JavaScript (ES6+), HTML5, CSS3, Tailwind</li>
                  <li><strong>Backend &amp; APIs:</strong> Node.js, Express, PHP, Laravel, NestJS, RESTful APIs</li>
                  <li><strong>Mobile App:</strong> Flutter, Dart (Cross-platform iOS &amp; Android)</li>
                  <li><strong>Databases:</strong> MySQL, PostgreSQL, Relational DB Design</li>
                  <li><strong>Tools &amp; Workflow:</strong> Git, GitHub, Figma, VS Code, Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
