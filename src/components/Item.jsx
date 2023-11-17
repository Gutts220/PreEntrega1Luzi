import React from 'react'

const Item = ({title, price, image}) => {
  return (
    <div>
        <h1>Producto: {title}</h1>
        <p>${price}</p>
        <img src={image} alt={title} />
    </div>
  )
}

export default Item