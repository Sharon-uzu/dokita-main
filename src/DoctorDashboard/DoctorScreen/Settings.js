import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar2 from '../DoctorComponents/Sidebar2';
import dp from '../../Assets/A 1.png'
import { CiSearch } from "react-icons/ci";
import DoctorProfile from '../DoctorComponents/DoctorProfile';



const Settings = () => {
  return (
   
    <div>
      <section className='main-dash'>

        <Sidebar2/>

        <div className='main'>

            <DoctorProfile/>

          
          <div className='setting'>

            <h3>Edit Profile</h3>

            <form className='form'>
            <div>
                <input type="text" placeholder='First Name'/>
            </div>

            <div>
                <input type="email" placeholder='Your Email Address' />
            </div>

            <div>
                <input type="tel" placeholder='Phone Number'/>
            </div>

            <div>
                <input type="text" placeholder='Address' />
            </div>

            <div>
                <input type="password" placeholder='Change password' />
            </div>



            <div>
                <input type="file" name="" id="" />
            </div>

            <button type="submit">Submit</button>

            </form>
        </div>
          

        </div>

      </section>


      
        
    </div>
  )
}

export default Settings