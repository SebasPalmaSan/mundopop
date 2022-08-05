import React, { useState } from 'react'

import './ItemCount.css'

const ItemCount = ({stock}) => {

    const [ add, setAdd ] = useState(1);

    const handleIncrement = () => {
        if (add < stock){
            setAdd(add + 1);
        }
    }

    const handleDecrement = () => {
        if (add > 1){
            setAdd(add - 1);
        }
    }


  return (
    <div className="addProduct">
        <button className="btn btn-success" onClick={ handleDecrement }>-</button>
        <h3 className="text-light mr-3 ml-3"> {add} </h3>
        <button className="btn btn-success" onClick={ handleIncrement }>+</button>
        <button className="btn btn-success ml-5">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount