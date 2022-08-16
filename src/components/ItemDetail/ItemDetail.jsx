import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({ data }) => {
  return (
    <div className="bg-success itemProduct">
      
        <div className="itemImage">
          <img src={data.image} alt="img" width="100%" height="100%" />
        </div>
        <div>
          <p className="itemDescription text-dark">{data.description}</p>
          <h1 className="itemName">{data.name}</h1>
          <p className="itemPrice">${data.price}</p>
          
          <ItemCount stock={data.stock} min={1} />
          <p className="itemPrice">Stock: {data.stock}</p>

        </div>

          <Link to={"/"} className="btn btn-dark text-light mb-5 mt-3 ml-3">Volver</Link>
    </div>
  )
}

export default ItemDetail