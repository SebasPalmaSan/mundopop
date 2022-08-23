import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import './CartWidget.css'
import { Link } from "react-router-dom"
import { cartContext } from "../../store/cartContext"
import { useContext } from "react"


const CartWidget = () => {
  const { cart, totalAmount } = useContext(cartContext)
  return (
    <Link to={`cart`}>
        <FontAwesomeIcon className="btn buttonCart mr-1" icon={ faCartPlus } />
        {cart.length === 0 ?
        <span></span> :
        <span className="badge badge-danger mr-3">{totalAmount()}</span>
        }
    </Link>
  )
}

export default CartWidget
