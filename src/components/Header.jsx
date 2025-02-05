import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart.png'


function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <>
    <div className='notificationBar'>
      Make Your Home Green.
    </div>
  
    <header className='headerTop'>
      <div>
      <Link to="/"><img className='logoImg' src={logo} alt="" srcset="" /></Link>
       
      </div>
      
      <nav className='rigtNav'>
        <Link className='menuBtn' to="/products">View Products</Link>
        <Link to="/cart">
        <img width={25} src={cartIcon} alt="" srcset="" />
        <span className='cartCounter'>
        {cartCount}

        </span>
        </Link>
      </nav>
    </header>
      </>
  );
}

export default Header;