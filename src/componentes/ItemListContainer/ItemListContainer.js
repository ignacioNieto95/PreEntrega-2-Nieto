import React, {useState, useEffect} from 'react'
import { getSalsas } from '../../mockAPI/mockAPI'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getCategorySalsa } from '../../mockAPI/mockAPI';
import Loader from '../Loader/Loader';

function ItemListContainer(props) {

  const [listaPicantes, setlistaPicantes] = useState([]);

  const {categoryId} = useParams()
  console.log(categoryId)
  useEffect(
    () => {
      setlistaPicantes([])
      if(categoryId){
        getCategorySalsa(categoryId).then((respuesta) => setlistaPicantes(respuesta))
      }
      else{
        getSalsas().then((respuesta) => {
          setlistaPicantes(respuesta);
        }
      )
      }
      },[categoryId]
    )

  return (
    <div className='contenedor-principal'>
        <h1>{props.greeting}</h1>
        {listaPicantes.length ?
          <ItemList listaPicantes={listaPicantes}/>
          :
          <Loader/>
        }
        
    </div>
  )
  

}

export default ItemListContainer