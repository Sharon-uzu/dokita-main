import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo2.png'
import Modal from "react-modal";
import { LuSearch } from "react-icons/lu";
import { Lists } from '../utils/Data';
import { Specialist } from '../utils/Data';
import { Hospitals } from '../utils/Data';


const Find = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    function close(){
        setIsModalOpen(false);
      }


    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const toggleModal2 = () => {
        setIsModalOpen2(!isModalOpen2);
    };

    function close2(){
        setIsModalOpen2(false);
      }

      const [isModalOpen3, setIsModalOpen3] = useState(false);
    const toggleModal3 = () => {
        setIsModalOpen3(!isModalOpen3);
    };

    function close3(){
        setIsModalOpen3(false);
      }


  return (
    <div className='consult'>
        <header>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            
        </header>

        <h1>Find a doctor</h1>

        <section>
            <div onClick={toggleModal}><h3>All Doctors List</h3></div>
            {/* <div onClick={toggleModal2}><h3>Specialist Category</h3></div> */}
            <div onClick={toggleModal3}><h3>All Hospital</h3></div>
        </section>




        {/* ALL DOCTORS */}

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

                <div className='close-modal'>
                    <button onClick={close}>x</button>
                </div>
                
                <h1>All Doctors List</h1>

                <form className='search-f'>
                    <div>
                        <LuSearch className='search-icon'/>
                        <input type="search" name="" id="" />
                    </div>
                    
                    <button type="submit">Search</button>
                </form>

                <div className='list'>

                {
                Lists && Lists.map(item =>(
                    <h3 key={item.id}><Link to='/consult'>{item.name}</Link></h3>

                
                ))
            }     



                </div>

              </div>

            </div>
            
          </Modal>


          {/* ALL SPECIALIST */}

          <Modal
            isOpen={isModalOpen2}
            onRequestClose={toggleModal2}
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

                <div className='close-modal'>
                    <button onClick={close2}>x</button>
                </div>
                
                <h1>Specialist Category</h1>

                <form className='search-f'>
                    <div>
                        <LuSearch className='search-icon'/>
                        <input type="search" name="" id="" />
                    </div>
                    
                    <button type="submit">Search</button>
                </form>

                <div className='list'>

                {
                Specialist && Specialist.map(item =>(
                    <h3 key={item.id}><Link to='/consult'>{item.name}</Link></h3>

                
                ))
            }     



                </div>

              </div>

            </div>
            
          </Modal>


          {/* ALL HOSPITALS */}

          <Modal
            isOpen={isModalOpen3}
            onRequestClose={toggleModal3}
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

                <div className='close-modal'>
                    <button onClick={close3}>x</button>
                </div>
                
                <h1>Find Hospital</h1>

                <form className='search-f'>
                    <div>
                        <LuSearch className='search-icon'/>
                        <input type="search" name="" id="" />
                    </div>
                    
                    <button type="submit">Search</button>
                </form>

                <div className='list'>

                {
                Hospitals && Hospitals.map(item =>(
                    <h3 key={item.id}><Link to='/'>{item.name}</Link></h3>

                
                ))
            }     



                </div>

              </div>

            </div>
            
          </Modal>


    </div>
  )
}

export default Find