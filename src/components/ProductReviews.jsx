import React from 'react'
import ProductReviewCard from './ProductReviewCard'

const ProductReviews = ({productReviews}) => {
  return (
    <div>
        {
            productReviews.map((index,item)=>(
                <ProductReviewCard key={item.image} name={item.name} image={item.image} price={item.price} review={item.review} index={index} />
            ))
        }
    </div>
  )
}

export default ProductReviews