import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import NavBar from './componentes/NavBar/NavBar.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/>
          <ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>
          <ItemDetailContainer/>
        </div>
    </BrowserRouter>
  );
}



export default App;
