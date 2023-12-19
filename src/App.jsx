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

   return (
     <BrowserRouter>
       <div>
         <div>
           <a href="https://vitejs.dev" target="_blank">
             <img src={viteLogo} className="logo" alt="Vite logo" />
           </a>
           <a href="https://react.dev" target="_blank">
             <img src={reactLogo} className="logo react" alt="React logo" />
           </a>
         </div>
         <h1>Vite + React</h1>
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

         <nav>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/restaurants">Restaurants</Link></li>
             <li><Link to="/favorites">Favorites</Link></li>
           </ul>
         </nav>

         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Route path="/restaurants">
             <RestaurantList restaurants={restaurantData} />
           </Route>
           <Route path="/favorites" component={FavoriteRestaurants} />
           <Route path="/restaurants" render={() => <RestaurantList restaurants={restaurantData} />} />
         </Switch>
       </div>
     </BrowserRouter>
   );
 }

 export default App;
