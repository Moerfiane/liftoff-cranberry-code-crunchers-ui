// components/RestaurantList.js
import React from 'react';

function RestaurantList({ restaurants }) {
  return (
    <div>
      <h2>Restaurant List</h2>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>Category: {restaurant.category}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
//test