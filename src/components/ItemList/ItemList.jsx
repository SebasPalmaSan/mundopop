import React from 'react'
import Item from './Item.jsx'

const ItemList = ({ data }) => {
  return (
    <div>
      {
        data.map((product) => {
          return (<Item 
            key={product.id} 
            image={product.image}
            name={product.name}
            price={product.price}
          />
          )
        })
      }
    </div>
  )
}

export default ItemList