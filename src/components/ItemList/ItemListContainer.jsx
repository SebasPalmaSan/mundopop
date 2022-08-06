import React, { useEffect, useState } from 'react'
import dataProducto from '../../data/data.js'
import ItemList from './ItemList.jsx'


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
      <h1 className="text-center text-light">Productos Destacados</h1>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer
