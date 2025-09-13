import React from 'react';
import './Entry.css';

const Entry = (props) => {
  console.log(props);
  return (
     <article className="entry">
      <div className="entry-media">
        <img className="entry-img" src={props.img.src} alt={props.img.alt} />
      </div>

      <div className="entry-body">
        <div className="entry-meta">
          <span className="entry-country">{props.country}</span>
          <a
            className="entry-link"
            href={props.carInfoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </div>

        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
};

export default Entry;
