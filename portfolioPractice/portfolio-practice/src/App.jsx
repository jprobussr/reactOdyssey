import React from 'react';

import { projects } from './data/projects.js';
import ProjectCard from './components/ProjectCard.jsx';
import Header from './components/Header.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-main container">
        <section className="cards">
          {projects.map((p) => (
            <ProjectCard key={p.id} item={p} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
