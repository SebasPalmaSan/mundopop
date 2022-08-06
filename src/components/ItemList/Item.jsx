import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './Item.css'

const Item = ({image, name, price, description}) => {
  return (
    <>
      <div className="cardProduct">
        <div className="cardImage">
          <img src={image} alt="img" width="100%" height="100%" />
        </div>
        <div>
          <h1 className="cardTitle">{name}</h1>
          <p className="cardPrice">${price}</p>
          <p className="cardDescription">{description}</p>
        </div>

      <button className="btn btn-success text-light mb-3">Ver Producto</button>

<ItemCount initial={1} stock={5} />

      </div>
    </>
  )
}

export default Item