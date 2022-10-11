import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import NavBar from './componentes/NavBar/NavBar.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
    </BrowserRouter>
  );
}



export default App;
