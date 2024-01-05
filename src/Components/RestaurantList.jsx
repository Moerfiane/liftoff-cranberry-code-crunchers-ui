// components/RestaurantList.js
import React from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.location.address1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;