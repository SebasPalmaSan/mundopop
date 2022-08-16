import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import Cart from '../Cart/Cart'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  }

  return (
    <div className="bg-success itemProduct">
      
        <div className="itemImage">
          <img src={data.image} alt="img" width="100%" height="100%" />
        </div>
        <div>
          <p className="itemDescription text-dark">{data.description}</p>
          <h1 className="itemName">{data.name}</h1>
          <p className="itemPrice">${data.price}</p>
          
          {
            goToCart
              ? <Link to='/cart' className="btn btn-primary btn-lg">Terminar Compra</Link>
              : <ItemCount stock={data.stock} onAdd={onAdd} />
          }
          <p className="itemPrice">Stock: {data.stock}</p>
        </div>

          <Link to={"/"} className="btn btn-dark text-light mb-5 mt-3 ml-3">Volver</Link>
    </div>
  )
}

export default ItemDetail