// RestaurantCard.js
import React from 'react';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>Category: {restaurant.category}</p>
      {/* Add more details as needed */}
      <button>Add to Favorites</button>
    </div>
  );
}

export default RestaurantCard;
