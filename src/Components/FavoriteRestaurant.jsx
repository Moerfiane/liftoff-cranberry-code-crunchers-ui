// FavoriteRestaurants.js
import React from 'react';
import RestaurantCard from './RestaurantCard'; // Assuming you have a RestaurantCard component

function FavoriteRestaurants({ favoriteRestaurants }) {
  return (
    <div>
      <h2>Favorite Restaurants</h2>
      {favoriteRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default FavoriteRestaurants;
