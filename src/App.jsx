import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './store/cartContext';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <div className="container p-2 mb-2 bg-secondary mw-100">
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path='login' element={<Login />} />
            <Route path='categories/:categoryId' element={<ItemListContainer />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
      </CartProvider>
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
