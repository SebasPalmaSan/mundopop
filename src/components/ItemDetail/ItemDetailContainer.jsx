import React, { useEffect, useState } from 'react'
import dataProducto from '../../data/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


// const id = useParams().id
const getItem = () => {
    return new Promise((resolve  => {
        setTimeout(() => {
        resolve(dataProducto)
        }, 1500)
    }))
}
const ItemDetailContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getItem().then(products => {
            setData(products[0])
        }).catch(error => {
            console.log(error)
        })
    }, []);

  return (
    <div>
        <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer