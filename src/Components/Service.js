import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2.png'
import v3 from '../Assets/v3.png'
import v4 from '../Assets/v4.png'
import b1 from '../Assets/b1.png'
import au from '../Assets/call.png'
import vi from '../Assets/vid.png';
import {FaStar} from 'react-icons/fa'
import Testimonial from './Testimonial';
import { Doctors } from '../utils/Data';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Supabase } from "../config/supabase-config";
import d1 from '../Assets/d2.png';
import Modal from "react-modal";



const Service = () => {

    const [approvedPersonnel, setApprovedPersonnel] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedPersonnel, setSelectedPersonnel] = useState(null); // State to hold selected personnel details



    const toggleModal1 = () => {
        setIsModalOpen1(!isModalOpen1);
      };

      const openModal = (person) => {
        setSelectedPersonnel(person);
        setIsModalOpen1(true);
      };

    useEffect(() => {
        const fetchApprovedPersonnel = async () => {
          try {
            const { data, error } = await Supabase
              .from("dokita_signup")
              .select("*")
              .eq("role", "medical personnel")
              .eq("status", "approved");
    
            if (error) {
              setError(error.message);
              setLoading(false);
              return;
            }
    
            setApprovedPersonnel(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
    
        fetchApprovedPersonnel();
      }, []);


      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

      

  return (
    <div id='service'>
        <section className='service1'>
            <div className='serv'>

                <div className='s1'>
                    <h3><Link to='/find'>Find a Doctor </Link></h3>
                </div>

                <div className='s1'>
                    <h3><Link to='/find'>Find a Hospital</Link> </h3>
                </div>

                {/* <div className='s1'>
                <h3><Link to='/find'>Consult a  Therapist</Link></h3>
                </div> */}

                <div className='s1'>
                    <h3>Book  an Ambulance</h3>
                </div>


                <div className='s1'>
                    <h3>Pharmacy</h3>
                </div>


            </div>
        </section>

        <section className='why'>

            <h3>Why you should trust our services</h3>

            <div className='benefits'>

                <div>
                    <img src={v1} alt="" />
                    <h6>All Specialist</h6>
                </div>

                <div>
                    <img src={v2} alt="" />
                    <h6>Private and Secure</h6>
                </div>

                <div>
                    <img src={v3} alt="" />
                    <h6>24 Hours Service</h6>
                </div>

                <div>
                    <img src={v4} alt="" />
                    <h6>Scheduled Appointment</h6>
                </div>

            </div>


            <div className='start'>

                <div className='start-l'>
                    <img src={b1} alt="" />
                </div>

                <div className='start-r'>

                    <div className='start1'>
                        <h4>Start an online consultation with a doctor now </h4>
                    </div>

                    <div className='start2'>
                        <span>
                            <img src={au} alt="" />
                            <b>Audio</b>
                        </span>
                        
                    </div>

                    <div className='start2'>
                        <span>
                            <img src={vi} alt="" />
                            <b>Video</b>
                        </span>
                        
                    </div>

                    <div className='start1'>
                    <Link to='/find'><button>Start consultation</button></Link>
                    </div>

                    
                </div>

            </div>

        </section>


        <section className='experience'>

            <h3>Meet Our Experienced Doctors</h3>

            <div className='exp-doctors'>


            {approvedPersonnel.map((person) => (

                <div className='single' key={person.id}>
                    <img src={d1} alt="" />
                    <div className='content'>

                        <div>
                            <h6 className='name'>{person.fullname}({person.metadata.certification})</h6>
                            <h6 className='price'> ₦{person.metadata.price}</h6>
                        </div>

                        <div>
                            <span>{person.metadata.specialization}</span>
                            <span>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                            </span>

                            <button onClick={() => openModal(person)} style={{cursor:'pointer'}}>
                                {/* <Link to='/consult'> */}
                                    Book now
                                    {/* </Link> */}
                            </button>
                        </div>

                    </div>

                </div>
                ))
            }     



            </div>

        </section>

       <Testimonial/>


    </div>
  )
}

export default Service