import React, {useState} from 'react'
import Sidebar3 from '../UserComponents/Sidebar3'
import Profile from '../UserComponents/Profile'
import Modal from "react-modal";
import m1 from '../../Assets/b3.png'


const UserRecord = () => {

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <section className='main-dash'>

        <Sidebar3/>

        <div className='main'>

            <Profile/>

                <div className='pat' style={{textAlign:'center'}}>
                    <h2>Patient Information</h2>

                </div>

                <section className='record'>
                  <div>
                    <span className='s1'>
                        FullName
                    </span>
                    <span className='s2'>
                      Jessy C.
                    </span>
                  </div>

                  <div>
                    <span className='s1'>
                        Blood Group
                    </span>
                    <span className='s2'>
                      O+
                    </span>
                  </div>

                  <div>
                    <span className='s1'>
                        Genotype
                    </span>
                    <span className='s2'>
                      AA
                    </span>
                  </div>

                   <div>
                   <span className='s1'>
                       DOB
                   </span>
                   <span className='s2'>
                     02-10-2024
                   </span>
                 </div>


                 <div>
                    <span className='s1'>
                        Gender
                    </span>
                    <span className='s2'>
                      Femaile
                    </span>
                  </div>

                  <div>
                    <span className='s1'>
                        Emergency Contact
                    </span>
                    <span className='s2'>
                      John(Spouse), 09152433673
                    </span>
                  </div>

                </section>


                <div className='pat' style={{textAlign:'center'}}>
                    <h2>Medical History</h2>

                </div>

                <section className='record'>
                  <div>
                    <span className='s1'>
                        Past Condition
                    </span>
                    <span className='s2'>
                      Hypertension
                    </span>
                  </div>

                   <div>
                   <span className='s1'>
                       Surgery
                   </span>
                   <span className='s2'>
                     Apendix Removal
                   </span>
                 </div>


                 <div>
                    <span className='s1'>
                        Allergies
                    </span>
                    <span className='s2'>
                      Penicillin
                    </span>
                  </div>

                  <div>
                    <span className='s1'>
                        Family History
                    </span>
                    <span className='s2'>
                      Diabetes
                    </span>
                  </div>

                </section>



                {/* <div className='pat' style={{textAlign:'center'}}>
                    <h2>Current Medication</h2>

                </div>

                <section className='record'>
                  <div>
                    <span className='s1'>
                        Medication & dosage
                    </span>
                    <span className='s2'>
                      Lisinopril 10mg
                    </span>
                  </div>

                   <div>
                   <span className='s1'>
                       Frequency
                   </span>
                   <span className='s2'>
                     Twice Daily
                   </span>
                 </div>


                 <div>
                    <span className='s1'>
                        Physician
                    </span>
                    <span className='s2'>
                      Dr. Robert
                    </span>
                  </div> 

                  

                </section>*/}

                <div className='pat' style={{textAlign:'center'}}>
                    <h2>Test</h2>

                </div>

                <div className="trans">
                    <button onClick={toggleModal}>Upload Document</button>
                </div>

                <table className='d-table'>
                    <tr className='heading'>
                        <th>Date</th>
                        <th >Test</th>
                        <th className='dt'></th>
                    </tr>

                    <tr>
                        <td>12-02-2024</td>
                        <td>Glucose</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>

                    </tr>

                    <tr>
                        <td>12-02-2024</td>
                        <td>Typhoid</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>

                    </tr>

                </table>



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
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <section className='product-info'>
                    <div className='product-images'>

                        <img src={m1} alt="" />
                        

                    </div>

                    <div className='others'>

                        <p>Patient's Name: <span>John Doe</span></p>
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



          {/* SECOND MODAL */}


          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
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
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <form className='product-form'>

                    <div>
                        <p>Test Name</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Date</p>
                        <input type="date"  />
                    </div>

                    <div>
                        <p>Images</p>
                        <input type="file"
                            accept="image/*"
                            // multiple
                        />
                    </div>

                   

                    <div>
                        <button type="submit">SEND</button>
                    </div>
                
                </form>
                

              </div>

            </div>
            
          </Modal>


      </section>

      
        
    </div>
  )
}

export default UserRecord