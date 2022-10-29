import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {cartContext, removeItem} from '../../context/cartContext';
import Loader from '../Loader/Loader';

function ItemDetail(props) {

  const [cantidad, setCantidad] = useState(0)

  const addToCart = useContext(cartContext).addToCart

  const removeItem = useContext(cartContext).removeItem

  function onAddToCart(cantidad){
    setCantidad(cantidad)
    addToCart(props, cantidad)
  }

  if(props.img)
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
              <p>{props.descripcion}</p>
              {cantidad === 0 ? <p>Sin items</p> : <p>Con {cantidad} items</p>}
              <ItemCount onAddToCart={onAddToCart} inicial={1} stock={props.stock}/>
              <button className='eliminar-item' onClick={() => removeItem(props.id)}>Eliminar</button>
            </div>
          </div>
    )
  return(<div className='loader'>
          <Loader/>
        </div>)
}

export default ItemDetail