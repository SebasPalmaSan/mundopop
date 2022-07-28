import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1 className="text-center text-light mt-3 mb-3">¡BIENVENIDO A NUESTRA TIENDA ONLINE!</h1>
    <h2>{greeting}</h2>
    </>
  )
}

export default ItemListContainer
