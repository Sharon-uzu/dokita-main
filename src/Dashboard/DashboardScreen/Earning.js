import React, {useState} from 'react'
import Modal from "react-modal";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from '../DashboardComponents/Sidebar';
import dp from '../../Assets/A 1.png'

const Earning = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };


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

        


                <div className='pat' style={{textAlign:'center'}}>
                    <h2>Earnings</h2>

                </div>

                <div className="trans">
                    <button onClick={toggleModal1}>Add transaction</button>
                </div>

                <table className='d-table'>
                    <tr className='heading'>
                        <th>Doctors' Name</th>
                        <th>Date</th>
                        <th className='dt'>Amount</th>
                    </tr>

                    <tr>
                        <td>Dr. John Doe</td>
                        <td>12-02-2024</td>
                        <td className='dt'>$1,000</td>
                    </tr>

                    <tr>
                        <td>Dr. John Doe</td>
                        <td>12-02-2024</td>
                        <td className='dt'>$1,000</td>
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

                        <form className='trans-form'>
                            <p>Select a doctor</p>
                            <select name="" id="">
                                <option value="">Dr. James</option>
                                <option value="">Dr. James</option>
                                <option value="">Dr. James</option>
                                <option value="">Dr. James</option>
                                <option value="">Dr. James</option>
                                <option value="">Dr. James</option>
                            </select>

                            <p>Date</p>
                            <input type="datetime" name="" id="" />

                            <p>Amount</p>
                            <input type="text" placeholder='$50'/>

                            <button>Submit</button>
                        </form>
                        

                    </div>
                </section>
                

            </div>

        </div>
            
        </Modal>
    </div>
  )
}

export default Earning