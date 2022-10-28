import React, {useState, useEffect} from 'react'
import { getUnaSalsa } from '../../mockAPI/mockAPI'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer(props) {

  const [salsa, setSalsa] = useState({});

  const [msgError, setmsgError] = useState(null)

  const {id} = useParams()

  useEffect(
    () => {
      getUnaSalsa(id).then((respuesta) => {
          setSalsa(respuesta);
        }
      ).catch((error) => {
        setmsgError(error.message)
      })},[id]
    )

    
  return (
        <div className='contenedor-detalle'>
          <div className='detalle'>
            {msgError !== null ? 
              <h3>Error: {msgError}</h3> 
              :
              <ItemDetail 
              id={salsa.id}
              nombre={salsa.nombre}
              precio={salsa.precio} 
              img={salsa.img}
              origen={salsa.origen}
              categoria={salsa.categoria}
              stock={salsa.stock}
              descripcion={salsa.descripcion}
            />} 
          </div>
        </div>
  )
  
};

export default ItemDetailContainer