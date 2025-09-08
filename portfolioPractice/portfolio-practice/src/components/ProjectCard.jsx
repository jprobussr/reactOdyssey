import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ item }) => {
  return (
    <article className="card">
      <img className="card-img" src={item.coverImg} alt={item.title} />

      <div className="card-body">
        <h2>{item.title}</h2>
        <p className="dates">{item.dates}</p>
        <p>{item.description}</p>
        <a
          className="repo-link"
          href={item.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Repo
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
