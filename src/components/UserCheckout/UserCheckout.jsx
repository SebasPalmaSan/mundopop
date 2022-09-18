import React from 'react'
import { Link } from 'react-router-dom'


import './UserCheckout.css'

const UserCheckout = () => {

    return (
            <div>
                <h1 className="bg-dark rounded m-2 text-center text-light">FINALIZAR COMPRA</h1>
                <form>
                    <h2 className="bg-dark rounded m-2 text-center text-light">COMPLETA TUS DATOS</h2>
                    <label className="formLabel" htmlFor="name"></label>
                    <input className="form" type="text" name="name" placeholder="Tu Nombre completo" required />
                    <label className="formLabel" htmlFor="surname"></label>
                    <input className="form" type="text" name="surname" placeholder="Tu Apellido completo" required />
                    <label className="formLabel" htmlFor="email"></label>
                    <input className="form" type="email" name="email" placeholder="email@email.com" required />
                    <label className="formLabel" htmlFor="phone"></label>
                    <input className="form" type="number" name="phone" placeholder="00123456" required />

                    <section className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                            <input className="btn btn-primary btn-lg btn-block btnForm"type="submit" value='Enviar' />
                            <Link to="/" className="btn btn-primary btn-lg btn-block mb-3">Seguí con tu compra</Link>
                        </div>  
                    </section>

                </form>
        
            </div>
        )
    }


export default UserCheckout