import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext';
import ItemCart from '../ItemCart/ItemCart';

import './Cart.css'

const Cart = (id) => {

  const { cart, removeFromCart, clearCart, totalPrice, totalAmount } = useContext(cartContext);
     const removeItem = () => {
      removeFromCart(id);
  }
  console.log(cart)

  const order = {
    buyer: {
      name:'Sebastian',
      surname: 'Palma',
      email: 'sebastian@gmail.com',
      telefono: '123123456'
    },
    items: cart.map(item => ({id: item.id, name: item.name, price: item.price, quantity: item.quantity})),
    total: totalPrice(),
  }

  //EMITIR ORDENES DEL CARRITO A FIREBASE
    const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'ordenes');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }

  if(cart.length === 0){ 
    return (
      <>
      <h1 className="bg-dark text-center text-light m-2 rounded">NO HAY PRODUCTOS EN TU CARRITO</h1>
        <hr />
          <div className="bg-secondary row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4" >
              
              <Link to="/" className="btn btn-primary btn-lg btn-block mb-2">Volver</Link>
            </div>
          </div>
      </>
      )
  } else {
    return (
      <main>
        <h1 className="bg-dark rounded m-2 text-center text-light">TU CARRITO</h1>
        <ul>
          
          {cart.map((item) => {
            return (
              <ItemCart
                key={item.id + item.name}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                removeItem={removeItem}
              />
            )
          })}
        </ul>
        
        <section className="bg-light text-center text-success m-3 mediosPagos">Medios de Pago
        <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_50,w_100/v1661189462/medios-pagos/Visa-logo_e8eecm.jpg" alt="" /> <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_100,w_100/v1661189658/medios-pagos/MERCADOPAGO-LOGO_cp8h5d.png" alt="" /> <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_50,w_100/v1661189817/medios-pagos/MasterCard-Logo-1979_jp87gp.jpg" alt="" />
        </section>
          <section className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <button onClick={clearCart} className="btn btn-primary btn-lg btn-block">Vaciar Carrito</button>
            <Link to="/" className="btn btn-primary btn-lg btn-block mb-2">Volver</Link>
          </div>
          </section>
            <section className="bg-light resumen">
              <h1 className="text-center text-success">RESUMEN DE TU PEDIDO</h1>
              <hr />
              <h2 className="text-center text-success">Cantidad: {totalAmount()}</h2>
              <hr />
              <h2 className="text-center text-success">Subtotal: ${totalPrice()}</h2>
              <hr />
              <h2 className="text-center text-success">Envio: Gratis</h2>
              <hr />
              <h2 className="text-center text-success">Total: ${totalPrice()}</h2>
              <hr />
              </section>

            <section className="row justify-content-center">
              <div  className="col-12 col-sm-8 col-md-6 col-xl-4">
                <Link to="/" className="btn btn-primary btn-lg btn-block mt-2 mb-2">Seguí con tu compra</Link>
                <Link to="/checkout"><button onClick={handleClick} className="btn btn-primary btn-lg btn-block mb-2">Finalizá tu compra</button></Link>
              </div>
            </section>
      </main>
    )
  }
}

export default Cart