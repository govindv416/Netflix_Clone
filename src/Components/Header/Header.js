import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='showcase'>
           <div className='showcase-top'>
            <img src='https://i.ibb.co/r5krrdz/logo.png' alt='/'/>
            <Link to='/' className='btn btn-rounded'>
            Sign In
            </Link>
           </div>
           <div className='showcase-content'>
           <h1>Unlimited Movie and TV Shows</h1> 
           <p>Watch any where . Cencle any time</p>
           <Link to='netflix-show' className='btn btn-xl'>
            Watch free for 30 Day
            <i className='fas fa-chevron-right btn-icon'></i>
           </Link>
           </div>
    </header>
  )
}

export default Header
