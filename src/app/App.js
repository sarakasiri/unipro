import './styles/App.css';
import { Route, Router } from 'react-router-dom';
import Games from '../containers/games/Games';


function App() {
  return (
    <div className="App">
      <Games />
      {/* <Router>
        <Route exact path='/games' component={Games} />
      </Router> */}
    </div>
  );
}

export default App;