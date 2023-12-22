import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { getTotalCartItems } = useContext(ShopContext)

  const onLogoClick = () => {
    navigate("/")
  }

  return (
    <div className='navbar'>
      <div className='nav-logo' onClick={onLogoClick}>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{location.pathname === "/" ? <hr /> : <></>}</li>
        <li><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{location.pathname === "/men" ? <hr /> : <></>}</li>
        <li><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{location.pathname === "/women" ? <hr /> : <></>}</li>
        <li><Link style={{ textDecoration: 'none' }} to='/kid'>Kids</Link>{location.pathname === "/kid" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button className={location.pathname === '/login' ? 'btn' : ""}>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar