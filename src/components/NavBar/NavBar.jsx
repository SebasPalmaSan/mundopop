import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidjet/CartWidget'


import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light rounded p-2">
        <NavLink className="navbar-brand ml-2" to="/">
            <img src='../images/logo-mundo-pop.jpeg' alt='Logo' width='150'/>
        </NavLink>
    <nav className="navbar navbar-light bg-light rounded dark text-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </nav>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link btn btn-light mr-2 text-success linkSize" to="/">INICIO<span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link btn btn-light mr-2 text-success linkSize" to="/products">PRODUCTOS</NavLink>
                </li>
                <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle btn btn-light mr-2 text-success linkSize" to="./categoriasFunkos" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CATEGORÍAS
                        </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/Rock">Rock</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/Got">Game Of Thrones</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/Disney">Disney</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/Marvel">Marvel</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/Dc">DC</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/StrangerThings">Stranger Things</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/StarWars">Star Wars</NavLink>
                    <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item bg-light text-success text-center" to="../categories/Films">Films</NavLink>
                    </div>
                    
                </li>
                <li className="nav-item">
                        <NavLink to='/login' className="nav-link btn btn-light mr-2 text-success linkSize">INICIÁ SESIÓN</NavLink>
                </li>
            </ul>

            <CartWidget />

        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscá tu Funko Favorito" aria-label="Search"/>
            <button className="btn btn-success text-light my-2 my-sm-0" type="submit">Buscar</button>
        </form>
        </div>
    </nav>
    </>
    )
}

export default NavBar