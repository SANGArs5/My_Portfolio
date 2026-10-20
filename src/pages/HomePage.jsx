import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactCTA from '../components/ContactCTA';

export default function HomePage({ onOpenModal }) {
  return (
    <div className="portfolio-flow">
      {/* Hero Section */}
      <Hero />

      {/* 01 About Me */}
      <About />

      {/* 02 Education */}
      <Education />

      {/* 03 Work Experience / Projects */}
      <Projects onOpenModal={onOpenModal} />

      {/* 04 Technical Skills */}
      <Skills />

      {/* 05 Contact CTA */}
      <ContactCTA />
    </div>
  );
}
