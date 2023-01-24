import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import { AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container'>
        <div className='img'>
            <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt=""/>
        </div>
        <div className='link'>
            <Link to={'/'} className='links'>Home</Link>
            <Link to={'/add'} className='links'>Add</Link>
            <Link to={'/wishlist'} className='links'>Wishlist</Link>
        </div>
        <div className='icons'>
            <AiOutlineSearch className='ai'/>
           <div className='spnc'>  
            <AiOutlineShoppingCart className='aic'/>
            <span></span>
           </div> 
        </div>
        <div className='btn'>
            <button>Buy Now</button>
        </div>
    </div>
  )
}

export default Navbar