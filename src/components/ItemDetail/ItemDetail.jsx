import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext'

import './ItemDetail.css'

const ItemDetail = ({ data }) => {
  
  const [goToCart, setGoToCart] = useState(0);

  const { addToCart } = useContext(cartContext)

  const onAdd = (quantity) => {
    addToCart(data, quantity);
    setGoToCart(quantity);
  }

  return (
    <div className="bg-success itemProduct">
      
        <div className="itemImage">
          <img src={data.image} alt="img" width="100%" height="100%" />
        </div>
        <div>
          <h1 className="itemName">{data.name}</h1>
          <hr />
          <p className="itemDescription text-light">{data.description}</p>
          <hr />
          <p className="itemPrice">${data.price}</p>
          <hr />
          
          {
            goToCart
              ? <Link to='/cart' className="btn btn-primary ml-5 text-light">Terminar Compra</Link>
              : <ItemCount stock={data.stock} onAdd={onAdd} />
          }
          <hr />
          <p className="itemPrice">Stock: {data.stock}</p>
          <hr />
        </div>

          <Link to={`/categories/${data.category}`} className="btn btn-primary btn-dark text-light mb-5 mt-2 ml-3">Volver</Link>
    </div>
  )
}

export default ItemDetail