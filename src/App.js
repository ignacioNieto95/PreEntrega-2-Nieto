import logo from './logo.svg';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import NavBar from './componentes/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>
    </div>
  );
}



export default App;
