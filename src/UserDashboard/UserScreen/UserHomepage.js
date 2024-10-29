import React, { useEffect, useState } from 'react';
import { Supabase } from "../../config/supabase-config";
import Sidebar3 from '../UserComponents/Sidebar3';
import { IoIosArrowForward } from "react-icons/io";
import pix from '../../Assets/leisure.png'
import { Link } from 'react-router-dom';
import { FaHospitalUser } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Profile from '../UserComponents/Profile';

const UserHomepage = () => {

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found");
        return;
      }

      try {
        const { data, error } = await Supabase
          .from("dokita_signup")
          .select("*")
          .eq("id", userId)
          .single();

        if (error) {
          console.error("Error fetching user info:", error);
          return;
        }

        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }



  return (
    <div>
      <section className='main-dash'>

        <Sidebar3/>

        <div className='main'>
          
          <Profile/>
          <div className="main-flex">

            <div className='main-l'>
              <h1>Dashboard Overview</h1>

              <section>

                <div className='s-l'>
                  <div>
                    <h2>Hello {userInfo.fullname},</h2>
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
           

          

            <Link to='/userappointment'>
              <FaReceipt className='icon-d'/>
              <h3>Appointments</h3>
            </Link>

            <Link to='/userecord'>
              <FaReceipt className='icon-d'/>
              <h3>Record</h3>
            </Link>


            <Link to='/usersetting'>
              <IoMdSettings className='icon-d'/>
              <h3>Settings</h3>
            </Link>

          </section>
              

        </div>

      </section>
        
    </div>
  )
}

export default UserHomepage