import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import './ItemCart.css'

const ItemCart = ({ id, image, name, price, quantity, removeItem }) => {
    //console.log(id)
    return (
        <div className="bg-light itemCart">
            <img src={image} alt={`Imagen: ${name}`} className="imgCart" />
                <div>
                    <h1 className="text-center text-success ml-5">PRODUCTO: {name}</h1>
                    <hr />
                    <h2 className="text-center text-success">PRECIO x U: {price}</h2>
                    <hr />
                    <h2 className="text-center text-success">CANTIDAD: {quantity}</h2>
                    <hr />
                    <h2 className="text-center text-success">TOTAL: ${price * quantity}</h2>
                    <hr />
                    <FontAwesomeIcon className="btn btn-danger m-2" onClick={() => removeItem(id)} icon={faTrashCan} />
                </div>
        </div>
    )
}

export default ItemCart;