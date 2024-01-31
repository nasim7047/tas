import React from 'react'
import "../CSS/style.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      
    <nav id="navbar">
        <ul>
            <li className="item"><Link to="/">Home</Link></li>
            <li className="item"><Link to="#services-container">Services</Link></li>
            <li className="item"><Link to="register">Register as a Professional</Link></li>
            <li className="item"><Link to="prologin">Professional Login</Link></li> 
            <li className="item"><Link to="contact">Contact Us</Link></li>
        </ul>

        <div className="split">
            <div className="link-1">
                <Link to="login"><button type="button"><span>Login</span></button></Link>
            </div>
            <div className="link-2">
                <Link to="signup"><button type="button"><span>Sign up</span></button></Link>
            </div>
        </div>
    </nav>
    </>
  )
}
