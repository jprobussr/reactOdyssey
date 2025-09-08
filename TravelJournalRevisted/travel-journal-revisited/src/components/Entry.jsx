import React from 'react';
import '../index.css';
import marker from '../marker.png';

const Entry = () => {
  return (
    <>
      <article className="article-container">
        <img
          className="img"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="mountain in Japan"
        />

        <div className="info-container">
          <div className="info">
            <img className="logo-marker" src={marker} alt="Marker Icon" />
            <h3>Japan</h3>
            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
              View on Google Maps
            </a>
          </div>
          <h2>Mount Fuji</h2>
          <p className='date'>12 Jan, 2023 - 24 Jan, 2023</p>
           <p className='description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </article>
    </>
  );
};

export default Entry;
