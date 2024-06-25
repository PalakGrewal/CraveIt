import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className ='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className = "navbar-menu">
        <li>Homne</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact-us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="assets" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" className="assets" />
          <div className='dot'></div>
        </div>
      </div>
    </div>

  )
}

export default Navbar