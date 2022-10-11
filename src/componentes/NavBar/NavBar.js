import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/">HAR | حار</NavLink></li>
                <li><NavLink to="/">Productos</NavLink></li>
                <li><NavLink to="/category/Tabasco">Tabasco</NavLink></li>
                <li><NavLink to="/category/Yucateco">El Yucateco</NavLink></li>
                <li><NavLink to="/category/Especiales">Especiales</NavLink></li>
            </ul>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default NavBar