import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import ItemDetails from './Components/ItemDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './Components/Items';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {
            <>
              <Items/>
            </>
        }/>
        <Route path='/product/:id' element = {<ItemDetails/>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
