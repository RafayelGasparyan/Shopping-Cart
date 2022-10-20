import './App.css';
import data from "./components/back/Data/Data"
import Header from './components/front/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RoutesRouter from './components/front/Routes/Routes';
import { useState } from 'react';




function App() {
  const [cartItems,setCartItems] = useState([]);
  const [data,setData] = useState([
  {
    id:Math.random(),
    name:"Beats Headphone",
    price:999,
    image:"./pics/beats.jpg"
  },
  {
    id:Math.random(),
    name:"Sol Headphnoe",
    price:899,
    image:"./pics/sol.jpeg"
  },
  {
    id:Math.random(),
    name:"Senheiser",
    price:799,
    image:"./pics/senheiser2.jpg"
  },
  {
    id:Math.random(),
    name:"Iphone X",
    price:1199,
    image:"./pics/iphone.png"
  },
  {
    id:Math.random(),
    name:"Samsung",
    price:1099,
    image:"./pics/samsung.jpg"
  },
  {
    id:Math.random(),
    name:"OnePlus",
    price:1299,
    image:"./pics/oneplus.jpg"
  },
  {
    id:Math.random(),
    name:"Macbook Pro",
    price:2999,
    image:"./pics/macbook.jpg"
  },
  {
    id:Math.random(),
    name:"Acer Laptop",
    price:1999,
    image:"./pics/acer.jfif"
  },
  {
    id:Math.random(),
    name:"Asus Laptop",
    price:1299,
    image:"./pics/asus.jpg"
  }
  ])

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? 
       {
        ...ProductExist,
        quantity:ProductExist.quantity + 1
       }: item))
    } else {
      setCartItems([...cartItems,{...product,quantity:1}])
    }
  } 



 const  handleRemoveProduct = (product) => {
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if(ProductExist.quantity === 1) {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  } else {
    setCartItems(
      cartItems.map((item) => item.id === product.id
       ? {...ProductExist,quantity:ProductExist.quantity - 1}
       : item)
    )
  }
 } 

 const handleCartClearance = () => {
  setCartItems([]);
 }
  
  return (
    <div>
        <Header cartItems={cartItems}/>
        <RoutesRouter 
          data={data} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
    </div>
  );
}


export default App;
