import React, {useContext} from 'react';
import {cartContext} from '../../context/cartContext';
import './CartView.css';
import { NavLink } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';




function CartView() {

    
    const {cart, removeItem, emptyCart, getTotalPrice} = useContext(cartContext)
    

    

    if(cart.length !== 0){
        return (
            <div className='contenedor-principal'> 
                <div className='contenedor-general'>
                    <h2>Productos en carrito</h2>
                    <div className='contenedor-productos-carrito'>
                        {cart.map(item => (  
                            <div className='producto-carrito' key={item.id}>
                                <h4>{item.newItem.nombre}</h4>
                                <h5>${item.newItem.precio}</h5>
                                <h6>Cantidad: {item.newItem.cantidad}</h6>
                                <img className='img-producto' src={item.newItem.img}></img>
                                <button className='btn-eliminar' onClick={() => removeItem(item.newItem.id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                    <div className='finalizar'>
                        <h4>Precio total: ${getTotalPrice()}</h4>
                        
                    </div>
                    <button className='btn-vaciar' onClick={() => emptyCart()}>Vaciar Carrito</button>
                </div>
                <UserForm cart={cart} getTotalPrice={getTotalPrice}/>
            </div>
        )
    }
    else{
        return (
            <div className='contenedor-general'>
                <h2>Aun no hay productos en carrito</h2>
                <button><NavLink className='btn-ver-productos' to="/">Ver productos</NavLink></button>
            </div>
            )
    }
}

export default CartView