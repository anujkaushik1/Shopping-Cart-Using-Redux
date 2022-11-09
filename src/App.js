import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import ItemDetails from './Components/ItemDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './Components/Items';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './Components/Cart';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Items />
            </>
          } />
          <Route path='/product/:id' element={<ItemDetails />} />
          <Route path='/cart' element = {<Cart/>} />
        </Routes>

      </BrowserRouter>
    </Provider>

  );
}

export default App;
