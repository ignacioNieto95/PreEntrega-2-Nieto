import React, {useContext} from 'react';
import {cartContext} from '../../context/cartContext';
import './CartView.css';

function CartView() {
    const {cart, removeItem, emptyCart, getTotalPrice} = useContext(cartContext)
    console.log(cart)
    return (
        <>
            <div className='contenedor-general'>
                <h2>Productos en carrito</h2>
                <div className='contenedor-productos-carrito'>
                    {cart.map(item => (  
                        <div className='producto-carrito'>
                            <h4>{item.newItem.nombre}</h4>
                            <h5>${item.newItem.precio}</h5>
                            <h6>Cantidad: {item.newItem.cantidad}</h6>
                            <img className='img-producto' src={item.newItem.img}></img>
                            <button className='btn-eliminar' onClick={() => removeItem(item.newItem.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
                <h4>Precio total: ${getTotalPrice()}</h4>
                <button className='btn-vaciar' onClick={() => emptyCart()}>Vaciar Carrito</button>
            </div>
        </>
    )
}

export default CartView