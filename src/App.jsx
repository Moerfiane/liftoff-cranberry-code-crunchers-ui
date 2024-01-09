import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Restaurants from './pages/Restaurants'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <Routes>
      <Route exact path="/restaurants" element={<Restaurants/>} />
    </Routes>
  );
}

export default App
