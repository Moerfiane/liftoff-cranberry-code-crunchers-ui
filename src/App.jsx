/// App.js
 import { useState } from 'react';
 import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
 import Home from './components/Home';
 import About from './components/About';
 import Contact from './components/Contact';
 import RestaurantList from './components/RestaurantList'; // Add this import
 import FavoriteRestaurants from './components/FavoriteRestaurant'; // Add this import
 import reactLogo from './assets/react.svg';
 import viteLogo from '/vite.svg';
 import './App.css';

 function App() {
   const [count, setCount] = useState(0);

   // Dummy restaurant data for testing
   const restaurantData = [
     { id: 1, name: 'Restaurant 1', category: 'Category A' },
     { id: 2, name: 'Restaurant 2', category: 'Category B' },
     // Add more dummy data as needed
   ];

<<<<<<< showRestaurantsInUI
=======
export default App
>>>>>>> main