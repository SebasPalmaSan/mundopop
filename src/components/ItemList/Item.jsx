import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

const Item = ({id, image, name, price, description}) => {
  return (
    <>

      <div className="tarjeta">
  
      <div className="card text-white bg-success mb-3 cardProduct">
        <div className="cardImage p-1">
          <img src={image} alt="img" max-width="100%" height="92%" />
        </div>
        <div>
          <h1 className="cardTitle">{name}</h1>
          <p className="cardPrice">${price}</p>
          <p className="cardDescription">{description}</p>
        </div>
        

      <Link className="btn btn-light text-success mb-2" to={`/detail/${id}`}>Ver Producto</Link>
      

      </div>

      </div>
    </>
  )
}

export default Item