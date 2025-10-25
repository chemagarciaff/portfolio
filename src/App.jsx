import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Layout from './components/Layout';
import Main from './components/Main';
import Skills from './components/Skills';
import Greenbloom from './components/projects/Greenbloom';
import GuessWhere from './components/projects/Guesswhere';
import HausEstate from './components/projects/HausEstate';
import Ilcollective from './components/projects/Ilcollective';
import Snake from './components/projects/Snake';
import Sync from './components/projects/Sync';

function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='skills' element={<Skills />} />
        <Route path='experience' element={<Experience />} />
        <Route path='contact' element={<Contact />} />
      
        <Route path='project/snake' element={<Snake />} />
        <Route path='project/ilcollective' element={<Ilcollective />} />
        <Route path='project/guesswhere' element={<GuessWhere />} />
        <Route path='project/sync' element={<Sync />} />
        <Route path='project/hausestate' element={<HausEstate />} />
        <Route path='project/greenbloom' element={<Greenbloom />} />
      </Route>
    </Routes>

  );
}



export default App
