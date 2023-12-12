// RestaurantList.js
import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList({ restaurants }) {
  return (
    <div>
      <h2>Restaurant List</h2>
      {restaurants.length === 0 ? (
        <p>No restaurants available.</p>
      ) : (
        <div className="restaurant-list">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantList;
