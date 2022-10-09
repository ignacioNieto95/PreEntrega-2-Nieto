import React from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'

function Card(props) {
  return (
    <div className='item'>
        <h3>{props.nombre}</h3>
        <img className='img' src={props.img} alt='img'></img>
        <p>Precio: ${props.precio}</p>
        <p>Origen: {props.origen}</p>
        <p>Categoria: {props.categoria}</p>
        <ItemCount inicial={1} stock={props.stock}/>
    </div>
  )
}

export default Card