import './styles/app.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import Games from '../containers/games/Games';
import Home from '../containers/home/Home';
import Page404 from '../containers/page404/Page404';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mirageGame' element={<Games />} />
        <Route exact path='/404-notfound' element={<Page404 />} />
        <Route path='*' element={<Navigate to='/404-notfound' />} />
      </Routes>
    </div>
  );
}

export default App;