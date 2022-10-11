import React from 'react'
import Card from '../Card/Card'
import '../ItemListContainer/ItemListContainer.css'

function ItemList({listaPicantes}) {
  return (
    <div className='contenedor-productos'>
          {listaPicantes.map((producto) => {
            return(
              <Card
                key={producto.id}
                id={producto.id}
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
  )
}

export default ItemList