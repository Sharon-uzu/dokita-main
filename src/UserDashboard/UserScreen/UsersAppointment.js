import React, {useState} from 'react'
import Modal from "react-modal";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar3 from '../UserComponents/Sidebar3';
import dp from '../../Assets/A 1.png'
import Profile from '../UserComponents/Profile';


const UsersAppointment = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };


  return (
    <div>
      <section className='main-dash'>

        <Sidebar3/>

        <div className='main'>
          
            <Profile/>

                <div className='pat' style={{textAlign:'center'}}>
                    <h2>Appointments</h2>

                </div>

                <table className='d-table'>
                    <tr className='heading'>
                        <th>Doctor's Name</th>
                        <th>Date</th>
                        <th className='dt'></th>
                    </tr>

                    <tr>
                        <td>Dr. John Doe</td>
                        <td>12-03-2024</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                    <tr>
                        <td>Dr. Jane A.</td>
                        <td>10-05-2024</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                </table>

          

        </div>

      </section>


      <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <section className='product-info'>
                    <div className='product-images'>

                        {/* <img src={m1} alt="" />
                        <img src={m2} alt="" />
                        <img src={m3} alt="" /> */}

                    </div>

                    <div className='others'>

                        <p>Doctor's Name: <span>Dr. Williams</span></p>
                        <p>Department: <span>Opthalmalogy</span></p>
                        <p>Means: <span>Audio</span></p>
                        <p>Date: <span>12th April, 2024.</span></p>
                        <p>Time: <span>12:00pm</span></p>

                    </div>
                </section>
                

              </div>

            </div>
            
          </Modal>
        
    </div>
  )
}

export default UsersAppointment