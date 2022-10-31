import React, {useContext} from 'react';
import {cartContext} from '../../context/cartContext';
import { crearOrdenCompra } from '../../services/firebase';
import './CartView.css';
import { NavLink } from 'react-router-dom';

function CartView() {
    const {cart, removeItem, emptyCart, getTotalPrice} = useContext(cartContext)
    console.log(cart)

    function checkoutHandler(){

        const datosComprador = {
            nombre: "Ignacio",
            mail: "iguinieto128@gmail.com",
            telefono: 123456789,
        }
        const ordenCompra = {
            datosComprador: datosComprador,
            cart: cart,
            total: getTotalPrice(),
            fecha: new Date(),
        }
        
        crearOrdenCompra(ordenCompra);

    }

    if(cart.length !== 0){
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
                    <div className='finalizar'>
                        <h4>Precio total: ${getTotalPrice()}</h4>
                        <button onClick={checkoutHandler}>Finalizar compra</button>
                    </div>
                    <button className='btn-vaciar' onClick={() => emptyCart()}>Vaciar Carrito</button>
                </div>
            </>
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