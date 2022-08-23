import React, { useState } from 'react'

import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {

    const [ amount, setAmount ] = useState(1);

    const handleIncrement = () => {
        if (amount < stock){
            setAmount(amount + 1);
        }
    }

    const handleDecrement = () => {
        if (amount > 1){
            setAmount(amount - 1);
        }
    }


  return (
    <div className="addProduct">
        <button className="btn btn-dark text-light" onClick={ handleDecrement }>-</button>
        <h3 className="text-light mr-3 ml-3"> {amount} </h3>
        <button className="btn btn-dark text-light" onClick={ handleIncrement }>+</button>
        <button onClick={() => onAdd(amount)} className="btn btn-dark ml-5 text-light">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount