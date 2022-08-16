import React, { useEffect, useState } from 'react'
import dataProducto from '../../data/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const idUrl  = useParams().id

    const getItem = () => {
        return new Promise((resolve => {
            let encontrarProducto = dataProducto.find((item) => item.id === Number(idUrl))
            setTimeout(() => {
                resolve(encontrarProducto)
            }, 1500);
        }))
    }

    useEffect(() => {
        getItem().then(product => {
            setData(product)
        })
    }, [])

    return(
        <main>
            <ItemDetail data={data} />
        </main>
    )

}

export default ItemDetailContainer