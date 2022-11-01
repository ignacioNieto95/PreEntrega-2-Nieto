import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import NavBar from './componentes/NavBar/NavBar.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartContextProvider} from './context/cartContext';
import CartView from './componentes/CartView/CartView';
import { mandarDataFirebase } from './services/firebase';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartView/>}/>
            </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}



export default App;
