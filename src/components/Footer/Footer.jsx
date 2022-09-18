import React from 'react'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"

import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div  className="row bg-dark text-light rounded p-5 m-1">
      <div className="container">
        <Link to="/" className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
          <img className="logoFooter mx-2" src="../images/logo-mundo-pop.jpeg" alt="logo"/>
          </Link>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="row font-weight-bold mb-2">Mundo Pop</li>
            <li className="row text-center">Podrás encontar tus Funkos Favoritos</li>
          </ul>
          <ul className="00 col-12 col-md-3 list-unstyled">
            <li className="row font-weight-bold mb-2">Síguenos</li>
              <li className="d-flex justify-content-between">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-twitter"></i>
              </li>
          </ul>
      </div>
      <div className="container">
        <p className="text-center">© Mundo Pop! - 2022. Todos los derechos reservados - Sebastián Palma Sánchez</p>

      </div>
      

        {/* <section className="contacto">
        <div className="row ml-1">
          <FontAwesomeIcon icon={faPhone} /> +541123456789
        </div>
        <div className="row ml-5">
          <FontAwesomeIcon icon={faLocationDot} /> Av.Rivadavia 2040 CABA
        </div>
        </section> */}
    </div>
  )
}

export default Footer
