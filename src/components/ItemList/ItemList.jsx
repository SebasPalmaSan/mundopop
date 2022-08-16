import React from 'react'
import Item from '../ItemList/Item'

const ItemList = ({ data }) => {
  return (
      
        data.map((product) => {
          return (<Item 
            key={product.id} 
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
            stock={product.stock}
          />
          )
      })
  )
}

export default ItemList