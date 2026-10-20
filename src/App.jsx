import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// Pages
import HomePage from './pages/HomePage';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const location = useLocation();

  // Smoothly scroll to section when route matches
  useEffect(() => {
    const pathToId = {
      '/about': 'about',
      '/education': 'education',
      '/projects': 'projects',
      '/skills': 'skills',
      '/resume': 'skills',
      '/contact': 'contact',
    };

    const targetId = pathToId[location.pathname];
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className="portfolio-app figma-theme-app">
      {/* Figma Designed Navbar with TS Logo and Actions */}
      <Navbar />

      {/* Seamless Single-Canvas Flow matching Figma 1:1 */}
      <main className="main-content-flow">
        <HomePage onOpenModal={setActiveProject} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Project Discussion Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
