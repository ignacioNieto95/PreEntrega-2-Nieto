import React from 'react'

function InputForm(props) {
  return (
    <div>
        <label>{props.titulo}</label>
        <input value={props.value} name={props.name} type='text' onChange={props.onChange}></input>
    </div>
  )
}

export default InputForm