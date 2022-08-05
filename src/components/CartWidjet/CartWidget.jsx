import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon className="btn buttonCart" icon={ faCartPlus } />
    </div>
  )
}

export default CartWidget
