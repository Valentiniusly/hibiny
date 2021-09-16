import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main';
import MountainPage from './pages/MountainPage';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/mountain/:name'>
        <MountainPage />
      </Route>
    </Router>
  );
}

export default App;
