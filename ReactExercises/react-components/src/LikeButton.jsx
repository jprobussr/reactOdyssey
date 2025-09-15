import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  // handleToggle();
  
  const handleToggle = () => {
    setLiked((prev) => !prev)
  }


  return (
    <article className="card like-button" aria-labelledby="like-title">
      <h2 id="like-title">Like Button</h2>

      <button
        type="button"
        className={`like-button__btn ${liked ? 'is-liked' : ''}`}
        aria-pressed={liked}
        onClick={handleToggle}
      >
        {liked ? 'Liked ❤️' : 'Like 🤍'}
      </button>

      <p className="hint">Click to toggle.</p>
    </article>
  );
};

export default LikeButton;
