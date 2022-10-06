import React from 'react'
import {Link} from 'react-router-dom'

export default function Menyu(props) {
  return (
    <div className='d-flex justify-content-between menyu align-items-center'>
      <nav className='ms-5'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to='/dash'>Dashboard</Link></li>
        </ul>
      </nav>
      <div className="icon me-5">
        <Link to='/cart'><i className="bi bi-cart3 me-3"></i></Link>
        <button className='btn' onClick={props.kirish}><i className="bi bi-shield-lock"></i></button>
      </div>
    </div>
  )
}
