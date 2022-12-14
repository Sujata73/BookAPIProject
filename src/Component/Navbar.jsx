import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div >
        <h1>Books App</h1>
    </div>
    <div>
      <Link to='/favroutes'>
      <h3>your favourites</h3>
      </Link>
      </div>

</div>
  )
}

export default Navbar