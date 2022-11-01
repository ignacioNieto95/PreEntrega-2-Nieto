import React, {useState, useContext} from 'react'
import InputForm from './InputForm'
import Swal from 'sweetalert2/dist/sweetalert2.js';
/*mport 'sweetalert2/src/sweetalert2.scss';*/
import { useNavigate } from 'react-router-dom';
import { crearOrdenCompra } from '../../services/firebase';
import { cartContext } from '../../context/cartContext';

function UserForm({cart, getTotalPrice}) {

    const {emptyCart} = useContext(cartContext) 
    const navigate = useNavigate()

    const [userData, setuserdata] = useState({
        name: '',
        surname: '',
        age: '',
    })
 
    function onInputChange(evt){
        const name = evt.target.name
        const value = evt.target.value
        let newUserData = {...userData}
        newUserData[name] = value
        setuserdata(newUserData)
    } 

    function onSubmit(evt){
        evt.preventDefault()
        
        const ordenCompra = {
            datosComprador: userData,
            cart: cart,
            total: getTotalPrice(),
            fecha: new Date(),
        }
        
        crearOrdenCompra(ordenCompra).then(respuesta => {
            Swal.fire(
                `Gracias! Tu id de compra es ${respuesta}`,
                'Realizaste la compra con exito',
                'success'
              ).then(result => {
                navigate('/')
                console.log(respuesta)
              })
        });
        emptyCart();

    }

    return (
        <form onSubmit={onSubmit}>

            <InputForm
                value={userData.name}
                titulo='Nombre'
                name='name'
                onChange={onInputChange}
            />
            
            <InputForm
                value={userData.email}
                titulo='Email'
                name='email'
                onChange={onInputChange}
            />

            <InputForm
                value={userData.phone}
                titulo='Telefono'
                name='phone'
                onChange={onInputChange}
            />

            <button 
                type='submit'
            >
                Crear orden        
            </button>

        </form>
    )
}

export default UserForm

