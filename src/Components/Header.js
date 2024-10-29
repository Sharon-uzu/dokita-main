import React, { useState } from 'react';
import logo from '../Assets/logo1.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };



  return (
    <div className='header'>
        <nav>
            <div className="logo">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            <div className='bars' onClick={handleClick}>
              {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
            </div>

            <ul className={click ? 'menu active' : 'menu'}>
                <li onClick={closeMenuBar}><Link to='/'>Service</Link></li>
                <li onClick={closeMenuBar}><Link to='/find'>Consultation</Link></li>
                {/* <li><a href="">Emergency</a></li> */}
                <li onClick={closeMenuBar}><Link to='/about'>About Us</Link></li>
                {/* <li onClick={closeMenuBar}><Link to='/'>Blog</Link></li> */}
                <li className='login' onClick={closeMenuBar}><Link to='/login'>Login</Link></li>
            </ul>
        </nav>


        <div className={click ? 'cover' : 'cover active'}></div>

        
    </div>
  )
}

export default Header