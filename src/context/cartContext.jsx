import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props){

    const[cart, setCart] = useState([])

    function addToCart(item, cantidad){

        let newCart=[...cart]
        let newItem={...item, cantidad}
        newCart.push({newItem})
        setCart(newCart)

    }

    function removeItem(id){

        let newCart = cart.filter(itemInCart => {
                return (itemInCart.newItem.id !== id) //me devuelve el array carrito sin el item que coincida con el id que le paso a la fx
            }
        )
        setCart(newCart)

    }

    function getTotalItems(){
        let total = 0
        cart.forEach(itemInCart => {
                total = total + itemInCart.newItem.cantidad
            }
        )
        return total
    }

    function emptyCart(){

        setCart([])

    }

    function getTotalPrice(){
        let precioTotal = 0
        cart.forEach(item => {
            precioTotal = precioTotal + item.newItem.precio
        })
        return precioTotal
    }

    return(

        <div>
            <cartContext.Provider value={{cart, addToCart, getTotalItems, removeItem, emptyCart, getTotalPrice}}>
                {props.children}
            </cartContext.Provider>
        </div>

    )

}

export {cartContext, CartContextProvider};
