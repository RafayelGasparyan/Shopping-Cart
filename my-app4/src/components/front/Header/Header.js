import React from 'react'
import { Link } from 'react-router-dom';
import {FaHome} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai"
 const Header = ({cartItems}) => {
  return (
    <header className="header">
        <div>
            <h1>
                <Link to="/" className="logo">
                    Electronics Shop
                </Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/cart" className='cart'>
                        <AiOutlineShoppingCart style={{fontSize:"25px"}}/>
                        <span className='cart-length'>
                            {cartItems.length === 0 ? "" : cartItems.length}
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;

