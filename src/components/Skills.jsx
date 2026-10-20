import React from 'react';
import { skillsData, toolsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        <div className="section-tag">
          <span className="tag-number">04</span>
          <span className="tag-title">Technical skills</span>
          <div className="tag-line"></div>
        </div>

        <div className="section-header-grid">
          <h2 className="section-main-heading">
            From interface to infrastructure.
          </h2>
          <p className="section-intro-text">
            I work across web, backend, mobile, and data—connecting each layer with practical, maintainable solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category-card">
              <span className="skill-index-number">{category.id}</span>
              <div className={`skill-icon-box ${category.iconBoxClass}`}>
                <img src={category.icon} alt={`${category.title} icon`} />
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <p className="skill-category-desc">{category.description}</p>

              <div className="tech-icons-grid">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="tech-icon-item">
                    <img src={tech.icon} alt={tech.name} />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools I Work With Row */}
        <div className="tools-row">
          <span className="tools-label">Tools I work with</span>
          <div className="tools-grid">
            {toolsData.map((tool) =>
              tool.url ? (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tool-item tool-link"
                  title={`Visit ${tool.name} profile (${tool.url})`}
                >
                  <img src={tool.icon} alt={tool.name} />
                  <span className="tool-name">{tool.name} ↗</span>
                </a>
              ) : (
                <div key={tool.name} className="tool-item">
                  <img src={tool.icon} alt={tool.name} />
                  <span className="tool-name">{tool.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
