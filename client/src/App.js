import {React} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Bars/NavBar';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <AppRouter />
    </div>
    </Router>
  );
}

export default App;
