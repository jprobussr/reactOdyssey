import React from 'react';
import './Card.css';

const Card = ({
  title = 'Card Title',
  description = 'This is a simple card description.',
  image = 'https://picsum.photos/400/200',
  buttonLabel = 'Learn More',
}) => {
  return <div className='card'>
    <img src={image} alt="{title}" className='card-img' />
    <div className="content">
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
    </div>
  </div>;
};

export default Card;
