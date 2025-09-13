import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.img.src} alt={recipe.img.alt} />
      <h2>{recipe.title}</h2>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
      
    </div>
  );
};

export default RecipeCard;
