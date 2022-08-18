import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import './CartWidget.css'
import { Link } from "react-router-dom"


const CartWidget = () => {
  return (
    <Link to={`Cart`}>
        <FontAwesomeIcon className="btn buttonCart" icon={ faCartPlus } />
    </Link>
  )
}

export default CartWidget
