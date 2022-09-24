import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget.js'

function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="#">HAR | حار</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default NavBar