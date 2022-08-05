import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active carrousel">
          <img src="./KurtCobain65.jpeg" className="d-block w-10" alt="..."/>
              </div>
              <div className="carousel-item carrousel">
                <img src="./CraigJones178.jpeg" className="d-block w-10" alt="..."/>
              </div>
              <div className="carousel-item carrousel">
                <img src="./ToyStoryWoody168.jpeg" className="d-block w-10" alt="..."/>
              </div>
            </div>
            <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
  </Link>
</div>
  )
}

export default Home