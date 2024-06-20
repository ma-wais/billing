import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <h1>Heal Pharmacy (Sales)</h1>
      <div>
        <Link to='/'>Sales</Link>
        <Link to='/'>List</Link>
        <Link to='/'>Return</Link>
        <Link to='/'>Return List</Link>
        <Link to='/'>Stock</Link>
        <Link to='/'>reprint</Link>
        <Link to='/'>Change Password</Link>
        <Link to='/'>Logout</Link>

      </div>
    </div>
  )
}

export default Header