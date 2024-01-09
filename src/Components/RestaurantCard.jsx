// RestaurantCard.js
import React from 'react';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>Category: {restaurant.category}</p>
      <p>Address: {restaurant.address}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Reviews: {restaurant.reviews}</p>
      {/* Add more details as needed */}
      <button>Add to Favorites</button>
    </div>
  );
}

export default RestaurantCard;
