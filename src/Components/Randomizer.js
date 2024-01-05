// Randomizer.js

import React, { useState, useEffect } from 'react';
import RestaurantList from './RestaurantList';

const Randomizer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [randomizedRestaurant, setRandomizedRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchRestaurants = async () => {
    try {
      setLoading(true);

      // Replace 'YOUR_API_KEY' with your actual Yelp Fusion API key
      const apiKey = '-3viEYwHOmenfpRiVWvs1PWXFxNVe77RQxnFUIAjyPbjePPmt2FmCapNDsEpkZr2j1I-UIPr8177APs5N64pg_9kgvuQP0-getDJPpoJaTO4mPkRjGf6-x38zLd3ZXYx';
      const endpoint = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=your_location';

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await response.json();
      setRestaurants(data.businesses);
    } catch (error) {
      setError('Error fetching restaurant data');
      console.error('Error fetching restaurant data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    setRandomizedRestaurant(randomRestaurant);
  };

  useEffect(() => {
    handleFetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurant Randomizer</h1>
      <button onClick={handleRandomize} disabled={loading || restaurants.length === 0}>
        {loading ? 'Loading...' : 'Randomize Restaurant'}
      </button>
      {error && <p>{error}</p>}
      {randomizedRestaurant && (
        <div>
          <h2>Selected Restaurant:</h2>
          <p>{randomizedRestaurant.name}</p>
          <p>{randomizedRestaurant.location.address1}</p>
          <p>Rating: {randomizedRestaurant.rating}</p>
          {/* Add more details as needed */}
        </div>
      )}
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Randomizer;
