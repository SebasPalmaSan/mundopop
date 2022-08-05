import React, { useEffect, useState } from 'react'
import dataProducto from '../../data/data.js'
import Productos from '../Products/Productos.jsx'


const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataProducto)
    }, 2000)
  })

}
const ItemListContainer = () => {
  const [data, setData] = useState([])

    useEffect(() => {
      getProducts().then(products => {
        setData(products)
      })
    }, []);

  return (
    
    <div className="rounded mx-auto d-block">
      <h1 className="text-center text-light">Listado de Productos</h1>
      {
        data.map((product) => {
          return (<Productos 
            key={product.id} {...product}
            image={product.image}
            name={product.name}
            price={product.price}
          />
          )
        })
      }
    </div>
  )
}

export default ItemListContainer
