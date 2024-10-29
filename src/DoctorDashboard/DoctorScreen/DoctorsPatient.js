import React, {useState} from 'react'
import Modal from "react-modal";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar2 from '../DoctorComponents/Sidebar2';
import dp from '../../Assets/A 1.png'
import DoctorProfile from '../DoctorComponents/DoctorProfile';
import m1 from '../../Assets/b3.png'


const DoctorsPatient = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

  return (
    <div>
      <section className='main-dash'>

        <Sidebar2/>

        <div className='main'>

            <DoctorProfile/>

                <div className='pat' style={{textAlign:'center'}}>
                    <h2>Patients</h2>

                </div>

                <table className='d-table'>
                    <tr className='heading'>
                        <th>Patient Name</th>
                        <th>Email</th>
                        <th className='dt'></th>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>john@gmail.com</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                    <tr>
                        <td>Jane A.</td>
                        <td>jane@gmail.com</td>
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

                        <img src={m1} alt="" />
                         {/*<img src={m2} alt="" />
                        <img src={m3} alt="" /> */}

                    </div>

                    <div className='others'>
                    <h2>Patient Personal Information</h2>

                        <p>Full Name: <span>John Doe</span></p>
                        <p>Email: <span>john@gmail.com</span></p>
                        <p>Phone: <span>09182625243</span></p>
                        <p>Address: <span>Ada George, PH</span></p>
                        <p>Blood Group: <span>O+</span></p>
                        <p>Genotype: <span>AA</span></p>
                        <p>DOB: <span>02-10-2024</span></p>
                        <p>Gender: <span>Female</span></p>
                        <p>Emergency Contact: <span>John(Spouse), 09152433673</span></p>
                        <p>Past Condition: <span>Hypertension</span></p>
                        <p>Surgery: <span>Apendix Removal</span></p>
                        <p>Allergies: <span>Penicillin</span></p>
                        <p>Family History: <span>Diabetes</span></p>
                        

                    </div>
                </section>
                

              </div>

            </div>
            
          </Modal>
        
    </div>
  )
}

export default DoctorsPatient