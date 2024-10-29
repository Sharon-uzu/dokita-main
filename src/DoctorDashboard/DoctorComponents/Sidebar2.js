import React, { useState } from 'react';
import {AiFillHome } from "react-icons/ai";
import { MdOutlineReceipt } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import logo from '../../Assets/logo2.png'
import { FaHospitalUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";

const Sidebar2 = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);



    const [open, setOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const [open1, setOpen1] = useState(false);

    const handleClick = () => {
        setOpen1(!open1);
        setDropdownOpen(!isDropdownOpen);
        document.body.style.overflow = open1 ? 'auto' : 'hidden'; // Disable or enable scrolling

    }


  return (
    <div>
      
    
      
      {/* <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/> */}
      <div className='media-bar' onClick={handleClick}>
          {open1 ? (<IoCloseSharp id='close' style={{color:'#FFf'}}/>) : (<FaBars id='bar'  />)}
        </div>
      

      <div className={`side ${open1 ? ' active' : 'inactive'}`} style={{width:isOpen ? "90px" : "260px"}}>

      <div className='bar' >
        
        <div className='logo-div' 
        // style={{display:isOpen ? "none" : "block"}}
        >
            <img src={logo} onClick={toggle} style={{cursor:'pointer'}}/>
        </div>
        
        {/* <FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/> */}
      
      </div>

     
        

      

      <NavLink to='/doctordashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

        </div>
      
      </NavLink>

      

      <NavLink to='/doctorspatient' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaHospitalUser className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Patients</h4>

        </div>
      
      </NavLink>


      <NavLink to='/doctorsappointment' className='link' activeclassName = 'active'>
      
        <div>
        
          <MdOutlineReceipt className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Appointments</h4>

        </div>
      
      </NavLink>


   

      <NavLink to='/doctorsearning' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaMoneyBillWave className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Earnings</h4>

        </div>
      
      </NavLink>


      <NavLink to='/settings' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoIosSettings className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

        </div>
      
      </NavLink>

      
      
      
      </div>


      












      <div className={`side2 ${open1 ? ' active' : 'inactive'}`}>

      <div className='bar' >
        
        
      
      </div>

      
      

      
        

        
      <NavLink to='/doctordashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

        </div>
      
      </NavLink>

      

      <NavLink to='/doctorspatient' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaHospitalUser className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Patients</h4>

        </div>
      
      </NavLink>


      <NavLink to='/doctorsappointment' className='link' activeclassName = 'active'>
      
        <div>
        
          <MdOutlineReceipt className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Appointments</h4>

        </div>
      
      </NavLink>


      

      <NavLink to='/doctorsearning' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaMoneyBillWave className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Earnings</h4>

        </div>
      
      </NavLink>


      <NavLink to='/settings' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoIosSettings className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

        </div>
      
      </NavLink>




      
      
      </div>


    </div>
  )
}

export default Sidebar2