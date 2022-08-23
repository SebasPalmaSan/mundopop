import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataProducto from '../../data/data'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'



const ItemListContainer = () => {
  const [data, setData] = useState([])
  const categoryId = useParams().categoryId

  const getProducts = () => {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(dataProducto)
      }, 2000)
    }))
  
  }

    useEffect(() => {
      getProducts().then(products => {
        let filterItem = dataProducto.filter((item) => item.category === categoryId)
        if (categoryId === undefined) {
          setData(products)
        } else {
          setData(filterItem)
        }
      })
    }, [categoryId]);

    
  return (
    <>
      <div className=" mx-auto d-block homePage">
      <h1 className="text-center text-light m-5">PRODUCTOS DESTACADOS</h1>
      <ItemList data={data} />
    </div>

    </>
  )
}

export default ItemListContainer
