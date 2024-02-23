import React from 'react';

const FavoritesPage = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((recipe, index) => (
        <div key={index}>
          <p>{recipe.title}</p>
          <button onClick={() => removeFromFavorites(recipe)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
