import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <Link to={`/item/${props.id}`}>
      <div className='item'>
        <h3>{props.nombre}</h3>
        <img className='img' src={props.img} alt='img'/>
        <p>Precio: ${props.precio}</p>
        <p>Origen: {props.origen}</p>
        <p>Categoria: {props.categoria}</p>

      </div>
    </Link>
  )
}

export default Card