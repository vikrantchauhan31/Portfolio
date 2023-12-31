import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
 
      <Home/>
      <Skills/>
      <Education/>
      <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
