import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Receipe = ({ title, calories, image, ingredients }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='receipe'>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p className='calory'>Calories: {calories}</p>
      <img className='images' src={image} alt={title} />
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {isFavorite ? <MdFavorite style={{color:'red'}} /> : <MdFavoriteBorder style={{color:'white'}}/>}
    </div>
  );
};

export default Receipe;
