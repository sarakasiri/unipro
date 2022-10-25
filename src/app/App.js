import './styles/App.css';

import { Routes, Route } from 'react-router-dom';

import Games from '../containers/games/Games';
import Home from '../containers/home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mirageGame' element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;