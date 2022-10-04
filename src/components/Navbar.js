import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (

    <div style={{ display:'flex' , alignItems: 'centre' , justifyContent:'space-between' }}>
      
        <Link className="navLink" to="/" style={{ fontSize:'30px' , fontFamily:'fantasy' }} ><span className="logo" style={{ fontSize:'30px' , fontFamily:'fantasy' }}><b>Unwrapped Life</b></span></Link>

        <div>

        <Link className="navLink" style={{ fontSize:'30px' , fontFamily:'fantasy' }} to="/cart">{ items.length > 0 ? "Cart has " + items.length + " items" : "Cart is Currently Empty" } </Link>
 

      </div>

    </div>
  )
}

export default Navbar
