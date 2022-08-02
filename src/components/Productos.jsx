import React from 'react'
import imgBuzz from '../img/ToyStoryBuzzLightyear169.jpeg'
import ItemCount from './ItemCount'

import './Productos.css'

const Productos = ({image, name, price, description}) => {

  const datosProducto = 
    {
      name: 'Funko Pop Buzz Lightyear',
      price: 8.999,
      image: imgBuzz
    }
    
  return (
    <>
    <h1 className="text-center text-light mb-3">Productos Destacados</h1>
    <div className="cardProduct">
      <div className="cardImage">
        <img src={datosProducto.image} alt="img" width="100%" height="100%" />
      </div>
      <div>
        <h1 className="cardTitle">{datosProducto.name}</h1>
        <p className="cardPrice">${datosProducto.price}</p>
        <p className="cardDescription">{description}</p>
      </div>
      <button className="btn btn-success text-light mb-3">Ver Producto</button>

<ItemCount initial={1} stock={11} />

    </div>
    </>
  )
}

export default Productos 