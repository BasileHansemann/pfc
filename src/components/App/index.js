import { Route, Routes } from 'react-router-dom';
import Accueil from '../Accueil';
import Classic from '../Classic';
import NavBar from '../Navbar';
import Special from '../Special';
import reactLogo from './react-logo.svg';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='/classique' element={<Classic />}/>
        <Route path='/speciale' element={<Special />}/>
      </Routes>
    </div>
  );
}

export default App;
