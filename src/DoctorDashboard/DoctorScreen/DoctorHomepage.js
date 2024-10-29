import React, { useEffect, useState } from 'react';
import { Supabase } from "../../config/supabase-config";
import Sidebar2 from '../DoctorComponents/Sidebar2';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import dp from '../../Assets/A 1.png'
import { IoIosArrowForward } from "react-icons/io";
import pix from '../../Assets/leisure.png'
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import DoctorProfile from '../DoctorComponents/DoctorProfile';


const DoctorHomepage = () => {


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

        <Sidebar2/>

        <div className='main'>
          <DoctorProfile/>

          <div className="main-flex">

            <div className='main-l'>
              <h1>Dashboard Overview</h1>

              <section>

                <div className='s-l'>
                  <div>
                    <h2>Hello {userInfo.fullname} {userInfo.metadata?.institution} {console.log(userInfo)},</h2>
                    <p>Have a nice day and don’t forget to take care of your health!</p>

                  </div>
                  
                  {/* <Link >
                    <span>Learn more </span>
                    <span className='learn'><IoIosArrowForward /></span>
                  </Link> */}
                </div>


                <div className='s-r'>
                  <img src={pix} />
                </div>

              </section>
              

            </div>


            

          </div>

          <section className='dash-cards'>
           

            <Link to='/doctorspatient'>
              <FaHospitalUser className='icon-d'/>
              <h3>Patients</h3>
            </Link>

            <Link to='/doctorsappointment'>
              <FaReceipt className='icon-d'/>
              <h3>Appointments</h3>
            </Link>

           

            <Link to='/doctorsearning'>
              <FaMoneyBillWave className='icon-d'/>
              <h3>Earning</h3>
            </Link>

            <Link to='/settings'>
              <IoMdSettings className='icon-d'/>
              <h3>Settings</h3>
            </Link>

          </section>
              

        </div>

      </section>
        
    </div>
  )
}

export default DoctorHomepage