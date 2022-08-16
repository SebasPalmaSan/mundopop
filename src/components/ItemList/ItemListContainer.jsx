import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import dataProducto from '../../data/data'
import ItemList from '../ItemList/ItemList'



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
        {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/220309-CiaToy-Banners-1900x588-v1-sw.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/images/bannermarvel.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/images/bannerdisney.jpeg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </Link>
      </div> */}

    
    <div className=" mx-auto d-block bg-dark">
      <h1 className="text-center text-light m-5">PRODUCTOS DESTACADOS</h1>
      <ItemList data={data} />
    </div>

    </>
  )
}

export default ItemListContainer
