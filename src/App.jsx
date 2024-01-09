import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import your components
import About from './Components/About';
import Contact from './Components/Contact';
import FavoriteRestaurant from './Components/FavoriteRestaurant';
import Home from './Components/Home';
import Randomizer from './Components/Randomizer';
import RestaurantCard from './Components/RestaurantCard';
import RestaurantList from './Components/RestaurantList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Use your components here */}
      <About />
      <Contact />
      <FavoriteRestaurant />
      <Home />
      <Randomizer />
      <RestaurantCard />
      <RestaurantList />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
