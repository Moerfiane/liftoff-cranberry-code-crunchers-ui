// components/RestaurantList.js
import React from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.location.address1}
            <p>Category: {restaurant.categories.map((category) => category.title).join(', ')}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
