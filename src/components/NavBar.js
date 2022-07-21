import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light rounded p-4">
        <Link className="navbar-brand ml-2" to="/">
            <img src='/logo-mundo-pop.jpeg' alt='Logo' width='150'/>
        </Link>
    <nav className="navbar navbar-light bg-light roundeddark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </nav>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link btn btn-light mr-5 text-success" to="/"><h4>INICIO</h4><span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-light mr-5 text-success" to="/products"><h4>PRODUCTOS</h4></Link>
                </li>
                <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle btn btn-light mr-5 text-success" to="./categoriasFunkos" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h4>CATEGORÍAS</h4>
                        </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item bg-light text-dark text-center" to="../categoriasFunkos/Rock">Rock</Link>
                    <div className="dropdown-divider"></div>
                        <Link className="dropdown-item bg-light text-dark text-center" to="../categoriasFunkos/Got">Game Of Thrones</Link>
                    <div className="dropdown-divider"></div>
                        <Link className="dropdown-item bg-light text-dark text-center" to="../categoriasFunkos/Disney">Disney</Link>
                    <div className="dropdown-divider"></div>
                        <Link className="dropdown-item bg-light text-dark text-center" to="../categoriasFunkos/Marvel">Marvel</Link>
                    <div className="dropdown-divider"></div>
                        <Link className="dropdown-item bg-light text-dark text-center" to="../categoriasFunkos/Dc">DC</Link>
                    <div className="dropdown-divider"></div>
                        <Link className="dropdown-item bg-light text-dark text-center" to="../categoriasFunkos/StrangerThings">Stranger Things</Link>
                    </div>
                </li>
                <li className="nav-item">
                        <Link to='/register' className="nav-link btn btn-light mr-5 text-success"><h4>REGISTRATE</h4></Link>
                </li>
                <li className="nav-item">
                        <Link to='/login' className="nav-link btn btn-light mr-5 text-success"><h4>INICIÁ SESIÓN</h4></Link>
                </li>
            </ul>

        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 btn-outline-success" type="search" placeholder="Buscá tu Funko Favorito" aria-label="Search"/>
            <button className="btn btn-outline-success text-dark my-2 my-sm-0" type="submit">Buscar</button>
        </form>
        </div>
    </nav>
    </>
    )
}

export default NavBar