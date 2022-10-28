import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import carro from './buy-button.png';
import {cartContext} from '../../../context/cartContext';
import '../CartWidget/CartWidget.css';

function CartWidget() {

  const cart = useContext(cartContext).cart
  const getTotalItems = useContext(cartContext).getTotalItems
  console.log(cart)
  return (
    <div className='cart-container'>
        <NavLink to='/cart'><img src={carro}></img></NavLink>
        <p className='contador'>
          {getTotalItems() > 0 && getTotalItems()}
        </p>
    </div>
  )
}

export default CartWidget