import React from 'react'
import Products from '../Products/Products';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
 const RoutesRouter = ({data,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
  return (
       
    <Routes>
      <Route path='/' element={<Products data={data} handleAddProduct={handleAddProduct} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/cart'
        element={<Cart cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />} />
    </Routes>
       
      
    
  )
}

export default RoutesRouter;
