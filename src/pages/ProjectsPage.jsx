import React from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage({ onOpenModal }) {
  return (
    <div className="page-view projects-page-view">
      <Projects onOpenModal={onOpenModal} />
    </div>
  );
}
