import React, {useState, useEffect} from 'react'
import { getUnaSalsa } from '../../mockAPI/mockAPI'
import Card from '../Card/Card';
import './ItemDetailContainer.css'

function ItemDetailContainer(props) {

  const [salsa, setsalsa] = useState([]);

  useEffect(
    () => {
      getUnaSalsa().then((respuesta) => {
          setsalsa(respuesta);
        }
      )},[]
    )

  return (
        <div className='detalle'>
           <Card 
            nombre={salsa.nombre}
            precio={salsa.precio} 
            img={salsa.img}
            origen={salsa.origen}
            categoria={salsa.categoria}
            stock={salsa.stock}
           />
           <p>Esta es la descripcion dentro del detalle del producto</p> 
        </div>
  )
  
};

export default ItemDetailContainer