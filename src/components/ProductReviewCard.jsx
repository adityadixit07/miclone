import React from 'react'

const ProductReviewCard = ({name,image,price,review,index}) => {
  return (
    <div>
        <img src={image} alt={`${index} review`} />
        <h4>{review}</h4>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default ProductReviewCard