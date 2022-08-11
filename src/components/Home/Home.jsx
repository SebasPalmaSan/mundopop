import React from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemList/ItemListContainer'

import './Home.css'

const Home = () => {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active carrousel">
          <img src="/images/BANNER_DC_PW_01.jpg" className="d-block w-100 banner" alt="..."/>
        </div>
        <div className="carousel-item carrousel">
          <img src="/images/bannermarvel.jpg" className="d-block w-100 banner" alt="..."/>
        </div>
        <div className="carousel-item carrousel">
          <img src="/images/bannerdisney.jpeg" className="d-block w-100 banner" alt="..."/>
        </div>
      </div>
          <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </Link>
      </div>

      <ItemListContainer />
    </>
  )
}

export default Home