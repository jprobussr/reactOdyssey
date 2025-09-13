import React from 'react';
import '../index.css';
import marker from '../marker.png';

const Entry = (props) => {
  return (
    <>
      <article className="article-container">
        <img className="img" src={props.entry.img.src} alt={props.entry.img.alt} />

        <div className="info-container">
          <div className="info">
            <img className="logo-marker" src={marker} alt="Marker Icon" />
            <h3>{props.country}</h3>
            <a href={props.entry.googleMapsLink}>View on Google Maps</a>
          </div>
          <h2>{props.entry.country}</h2>
          <p className="date">{props.entry.dates}</p>
          <p className="description">{props.entry.text}</p>
        </div>
      </article>
    </>
  );
};

export default Entry;
