import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = (id) => {
  const { cart, removeFromCart, clearCart, totalPrice, totalProduct } = useContext(cartContext);
     const removeItem = () => {
      removeFromCart(id);
  }
  //console.log(cart)

  if(cart.length === 0){ 
    return (
      <div className="bg-secondary">
        <h1 className="text-center text-success">No hay Productos en tu carrito</h1>
        <Link to="/" className="btn btn-primary">Volver</Link>
      </div>
      )
  } else {
    return (
      <main>
        <h1 className="text-center text-light">TU CARRITO</h1>
        <ul>
          
          {cart.map((item) => {
            return (
              <ItemCart
                key={item.id + item.name}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                removeItem={removeItem}
              />
            )
          })}
        </ul>
        
        <section className="bg-light text-center text-success m-3">Medios de Pago
        <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_50,w_100/v1661189462/medios-pagos/Visa-logo_e8eecm.jpg" alt="" /> <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_100,w_100/v1661189658/medios-pagos/MERCADOPAGO-LOGO_cp8h5d.png" alt="" /> <img src="https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_50,w_100/v1661189817/medios-pagos/MasterCard-Logo-1979_jp87gp.jpg" alt="" />
        </section>

        <button onClick={clearCart} className="btn btn-primary m-3">Vaciar Carrito</button>
        <Link to="/" className="btn btn-primary m-3">Volver</Link>
        <section className="bg-light">
          <h1 className="text-center text-success">RESUMEN DE TU PEDIDO</h1>
          <hr />
          <h2 className="text-center text-success">Cantidad: {totalProduct}</h2>
          <hr />
          <h2 className="text-center text-success">Subtotal: ${totalPrice()}</h2>
          <hr />
          <h2 className="text-center text-success">Envio: $250,00</h2>
          <hr />
          <h2 className="text-center text-success">Total: ${totalPrice()}</h2>
          <hr />
          <Link to="/" className="btn btn-primary m-3">Seguí con tu compra</Link>
        </section>
      </main>
    )
  }
}

export default Cart