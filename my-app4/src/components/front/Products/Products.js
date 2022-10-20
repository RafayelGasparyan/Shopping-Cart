import React from 'react'
import { FaEllipsisH } from 'react-icons/fa';

 const Products = ({data,handleAddProduct}) => {
  return (
    <div className='products'>
       {data.map((el) => {
        return <div className='card' key={el.id}>
            <div>
                <img
                 className='product-image'
                  src={el.image} 
                  alt={el.name}
                />
            </div>
            <div>
                <h3 className='product-name'>{el.name}</h3>
            </div>
            <div className='product-price'>${el.price}</div>
            <div>
                <button className='product-add-button' onClick={()=> handleAddProduct(el)}>Add to Card</button>
            </div>
        </div>
       })}
    </div>
  )
}

export default Products;
