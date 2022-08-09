import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({ data }) => {
  return (
    <div className="itemProduct">
        <div className="itemImage">
          <img src={data.image} alt="img" width="100%" height="100%" />
        </div>
        <div>
          <p className="itemDescription">{data.description}</p>
          <h1 className="itemName">{data.name}</h1>
          <p className="itemPrice">${data.price}</p>
          
          <ItemCount stock={data.stock} min={1} />
          
        </div>

        <button className="btn btn-success text-light mb-3 mt-3">Volver</button>
    </div>
  )
}

export default ItemDetail