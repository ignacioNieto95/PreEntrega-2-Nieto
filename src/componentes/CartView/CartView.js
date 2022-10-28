import React, {useContext} from 'react';
import {cartContext} from '../../context/cartContext';

function CartView() {
    const {cart, removeItem} = useContext(cartContext)
    console.log(cart)
    return (
        <div>
            {cart.map(item => (
                <>
                <h4>{item.newItem.nombre}</h4>
                <button onClick={() => removeItem(item.newItem.id)}>X</button>
                </>
            ))}
            
        </div>
    )
}

export default CartView