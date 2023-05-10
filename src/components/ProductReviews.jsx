import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/productreviews.css'

const ProductReviews = ({productReviews}) => {
  return (
    <div className="productReviews">
        {
            productReviews.map((item,index)=>(
                <ProductReviewCard key={item.image} name={item.name} image={item.image} price={item.price} review={item.review} index={index} />
            ))
        }
    </div>
  )
}

export default ProductReviews