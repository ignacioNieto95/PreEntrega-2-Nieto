import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail(props) {
  return (
    <div className='item-detail'>
        <div className='producto'>
          <h3>{props.nombre}</h3>
          <img className='img-detail' src={props.img} alt='img'/>
          <p>Precio: ${props.precio}</p>
          <p>Origen: {props.origen}</p>
          <p>Categoria: {props.categoria}</p>
        </div>
        <div className='descripcion-compra'>
          <p>Descripcion: {props.descripcion}</p>
          <ItemCount inicial={1} stock={props.stock}/>
        </div>
      </div>
  )
}

export default ItemDetail