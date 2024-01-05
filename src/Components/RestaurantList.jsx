// src/components/RestaurantList.js

import React, { useState, useEffect } from 'react';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          'https://your-server-url/api/yelp/restaurants', // Replace with your server endpoint
          {
            headers: {
              Authorization: `-3viEYwHOmenfpRiVWvs1PWXFxNVe77RQxnFUIAjyPbjePPmt2FmCapNDsEpkZr2j1I-UIPr8177APs5N64pg_9kgvuQP0-getDJPpoJaTO4mPkRjGf6-x38zLd3ZXYx`, // Replace with your secured API key
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from Yelp API');
        }

        const data = await response.json();
        setRestaurants(data.businesses);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {restaurants.length > 0 && (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantList;
