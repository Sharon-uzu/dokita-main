import React, {useState, useEffect} from 'react';
import { Supabase } from "../../config/supabase-config";
import Modal from "react-modal";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from '../DashboardComponents/Sidebar';
import dp from '../../Assets/A 1.png'

const UnapprovedH = () => {

    const [hospitalData, setHospitalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedHospital, setSelectedHospital] = useState(null); // State to hold selected personnel details

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };

    const openModal = (hospital) => {
      setSelectedHospital(hospital);
      setIsModalOpen1(true);
    };
  
    const closeModal = () => {
      setSelectedHospital(null);
      setIsModalOpen1(false);
    };


    useEffect(() => {
      const fetchHospitalData = async () => {
        try {
          const { data, error } = await Supabase
            .from("dokita_signup")
            .select("*")
            .eq("role", "medical institution")
            .or('status.eq.,status.is.null'); // Query to filter records where status is empty or null
  
          if (error) {
            setError(error.message);
            setLoading(false);
            return;
          }
  
          setHospitalData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchHospitalData();
    }, []);


    const handleApprove = async (hospitalId) => {
      try {
        const { data, error } = await Supabase
          .from("dokita_signup")
          .update({ status: "approved" })
          .eq("id", hospitalId);
  
        if (error) {
          console.error("Error updating status:", error);
          return;
        }
  
        // Remove the approved person from the local state
        setHospitalData((prevData) => prevData.filter((hospital) => hospital.id !== hospitalId));
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }


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
                    <h2>Hospitals</h2>

                </div>

                <table className='d-table'>
                    <tr className='heading'>
                        <th>Hospitals' Name</th>
                        <th>Email</th>
                        <th className='dt'></th>
                        <th className='dt'></th>
                        {/* <th className='dt'></th> */}
                    </tr>

                    {hospitalData.map((hospital) => (
                    <tr style={{cursor:'pointer'}} key={hospital.id}>
                        <td>{hospital.metadata.institution}</td>
                        <td>{hospital.email}</td>
                        <td className='dt' onClick={() => openModal(hospital)}><button>View</button></td>
                        <td className='dt'><button onClick={() => handleApprove(hospital.id)}>Approve</button></td>
                        {/* <td className='dt'><button>Decline</button></td> */}
                    </tr>

                    ))}

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

                    {selectedHospital && (

                    <div className='others'>

                        <p>Full Name: <span>{selectedHospital.metadata.institution}</span></p>
                        <p>Email: <span>{selectedHospital.email}</span></p>
                        <p>RC Number: <span>{selectedHospital.metadata.rcNumber}</span></p>
                        <p>Address: <span>{selectedHospital.metadata.address}</span></p>
                        

                    </div>
                    )}
                </section>
                

              </div>

            </div>
            
          </Modal>
        
    </div>
  )
}

export default UnapprovedH