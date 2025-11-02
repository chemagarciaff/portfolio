import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Layout from './components/Layout';
import Main from './components/Main';
import Biblioteca from './components/projects/Biblioteca';
import Greenbloom from './components/projects/Greenbloom';
import GuessWhere from './components/projects/Guesswhere';
import HausEstate from './components/projects/HausEstate';
import Ilcollective from './components/projects/Ilcollective';
import Nobelprice from './components/projects/nobelprice';
import Snake from './components/projects/Snake';
import Sync from './components/projects/Sync';
import Skills from './components/Skills';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='skills' element={<Skills />} />
          <Route path='experience' element={<Experience />} />
          <Route path='contact' element={<Contact />} />

          <Route path='snake' element={<Snake />} />
          <Route path='ilcollective' element={<Ilcollective />} />
          <Route path='guesswhere' element={<GuessWhere />} />
          <Route path='sync' element={<Sync />} />
          <Route path='hausestate' element={<HausEstate />} />
          <Route path='greenbloom' element={<Greenbloom />} />
          <Route path='nobelprice' element={<Nobelprice />} />
          <Route path='biblioteca' element={<Biblioteca />} />
        </Route>
      </Routes>

  );
}



export default App
