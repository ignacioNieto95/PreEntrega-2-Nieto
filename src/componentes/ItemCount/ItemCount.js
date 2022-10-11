import React, {useState} from 'react'
import './ItemCount.css'

function ItemCount(props) {
  
  const [cantidad, setCantidad] = useState(props.inicial)
  
    function handleRestar(){
        if (cantidad > 1) 
            setCantidad(cantidad - 1);
    }

    function handleSumar(){
        if (cantidad < props.stock)
            setCantidad(cantidad + 1);
    }

  return (
    <div className='contador-cantidad'>
        <button>Comprar</button>
        <div className='sumar-restar'>
            <button onClick={handleRestar}>-</button>
            <strong className='cantidad'>{cantidad}</strong>
            <button onClick={handleSumar}>+</button>
        </div>
    </div>
  )
}

export default ItemCount