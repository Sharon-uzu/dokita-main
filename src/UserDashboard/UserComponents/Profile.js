import React, {useState} from 'react'
import dp from '../../Assets/A 1.png'
import dp1 from '../../Assets/e3.png'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Modal from "react-modal";


const Profile = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };


  return (
    <div>
        <div className="main-top">

            <span>Dashboard</span>

            <div className='form'>
              <CiSearch className='search-icon'/>
              <input type="search" placeholder='Search any keyword' />
            </div>

            <IoMdNotificationsOutline className='note'/>
            <img src={dp} style={{cursor:'pointer'}} onClick={toggleModal1}/>

        </div>

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
            <div className='modal2'>
              <div className='modal2-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <section>
                    <img src={dp1} alt="" />
                    <h2>Tessy F.</h2>
                    <h2>tessy@gmail.com</h2>
                    <h2>09176253434</h2>
                    <h2>#3 Avenue Road, Port Harcourt</h2>
                </section>
                

              </div>

            </div>
            
          </Modal>
    </div>
  )
}

export default Profile