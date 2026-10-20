import React from 'react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        <div className="section-tag">
          <span className="tag-number">02</span>
          <span className="tag-title">Education</span>
          <div className="tag-line"></div>
        </div>

        <div className="section-header-grid">
          <h2 className="section-main-heading">
            Learning that builds a strong foundation.
          </h2>
          <p className="section-intro-text">
            My academic journey has shaped my technical thinking, curiosity, and commitment to continuous growth.
          </p>
        </div>

        <div className="education-table">
          {educationList.map((item) => (
            <div key={item.school} className="edu-row">
              <div className="edu-year">{item.period}</div>
              <div className="edu-info">
                <h3 className="edu-school">{item.school}</h3>
                <p className="edu-degree">{item.degree}</p>
              </div>
              <div className="badge-wrapper">
                <div className={`edu-badge ${item.badgeRotation} ${item.badgeShape === 'rect' ? 'rect' : ''}`}>
                  {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
