import React from 'react'
import Sidebar from '../DashboardComponents/Sidebar'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import dp from '../../Assets/A 1.png'
import { IoIosArrowForward } from "react-icons/io";
import pix from '../../Assets/leisure.png'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";



const DashboardHomepage = () => {

    
  return (
    <div>
      <section className='main-dash'>

        <Sidebar/>

        <div className='main'>
          <div className="main-top">

            <span>Dashboard</span>

            <div className='form'>
              <CiSearch className='search-icon'/>
              <input type="search" placeholder='Search any keyword' />
            </div>

            <IoMdNotificationsOutline className='note'/>
            <img src={dp} />

          </div>

          <div className="main-flex">

            <div className='main-l'>
              <h1>Dashboard Overview</h1>

              <section>

                <div className='s-l'>
                  <div>
                    <h2>Hello Tassy Omah,</h2>
                    <p>Have a nice day and don’t forget to take care of your health!</p>

                  </div>
                  
                  <Link >
                    <span>Learn more </span>
                    <span className='learn'><IoIosArrowForward /></span>
                  </Link>
                </div>


                <div className='s-r'>
                  <img src={pix} />
                </div>

              </section>
              

            </div>


            

          </div>

          <section className='dash-cards'>
           

            <Link to='/patients'>
              <FaHospitalUser className='icon-d'/>
              <h3>Patients</h3>
            </Link>

            <Link to='/appointments'>
              <FaReceipt className='icon-d'/>
              <h3>Appointments</h3>
            </Link>

            <Link to='/undoctors'>
              <FaUserDoctor className='icon-d'/>
              <h3>Unapproved Doctors</h3>
            </Link>

            <Link to='/doctors'>
              <FaUserDoctor className='icon-d'/>
              <h3>Doctors</h3>
            </Link>

            <Link to='/unhospitals'>
              <FaUserDoctor className='icon-d'/>
              <h3>Unapproved Hospitals</h3>
            </Link>

            <Link to='/hospitals'>
              <FaUserDoctor className='icon-d'/>
              <h3>Hospitals</h3>
            </Link>

            <Link to='/earnings'>
              <FaMoneyBillWave className='icon-d'/>
              <h3>Earnings</h3>
            </Link>

        

          </section>
              

        </div>

      </section>
        
    </div>
  )
}

export default DashboardHomepage