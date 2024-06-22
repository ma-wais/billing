import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <h1>Heal Pharmacy (Sales)</h1>
      <div>
        <Link to='/'>Sales</Link>
        <Link to='/list'>List</Link>
        <Link to='/return'>Sale Return</Link>
        <Link to='/returnlist'>Return List</Link>
        <Link to='/stock'>Stock</Link>
        <Link to='/reprint'>reprint</Link>
        <Link to='/change'>Change Password</Link>
        <button style={{marginLeft:"5px"}}>Logout</button>
      </div>
    </div>
  )
}

export default Header