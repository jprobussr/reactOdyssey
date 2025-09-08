import React, { useState } from 'react';
import './App.css';
import user from './assets/user.png';
import starFilled from './assets/star-filled.png';
import starEmpty from './assets/star-empty.png';
import profileImg from './assets/profileImage10.jpg';

const App = () => {
  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Probus',
    phone: 'busy',
    email: 'john@mail.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

 const handleClick = () => {
  setContact(prev => ({
    ...prev,
    isFavorite: !prev.isFavorite
  }))
 }

  return (
    <main>
      <article className="card">
        <img src={profileImg} alt="Profile Avatar" className="avatar" />
        <div className="info">
          <button
            className="favorite-button"
            onClick={handleClick}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'
            }
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? 'Star is filled' : 'empty star'}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default App;
