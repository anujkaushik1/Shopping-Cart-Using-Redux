import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>

  );
}

export default App;
