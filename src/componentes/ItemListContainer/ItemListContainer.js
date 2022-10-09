import React, {useState, useEffect} from 'react'
import Card from '../Card/Card'
import { getSalsas } from '../../mockAPI/mockAPI'
import './ItemListContainer.css'

function ItemListContainer(props) {

  const [listaPicantes, setlistaPicantes] = useState([]);

  useEffect(
    () => {
      getSalsas().then((respuesta) => {
          setlistaPicantes(respuesta);
        }
      )},[]
    )

  return (
    <div className='contenedor-principal'>
        <h1>{props.greeting}</h1>
        <div className='contenedor-productos'>
          {listaPicantes.map((producto) => {
            return(
              <Card
                key={producto.id}
                nombre={producto.nombre} 
                precio={producto.precio} 
                img={producto.img}
                origen={producto.origen}
                categoria={producto.categoria}
                stock={producto.stock}
              />
              )
          })}
        </div>
    </div>
  )
}

export default ItemListContainer