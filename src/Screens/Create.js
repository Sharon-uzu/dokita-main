import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import logo from '../Assets/logo2.png'
import log from '../Assets/log.png'
import { IoMdLock } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import use from '../Assets/user.png'
import person from '../Assets/d1.png'
import institut from '../Assets/ins.png'
import { Supabase } from "../config/supabase-config";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";



const Create = () => {

    const [user, setUser] = useState(false)
    const [personnel, setPersonnel] = useState(false)
    const [institute, setInstitute] = useState(false)
    const [medical, setMedical] = useState(false)


  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
  };

  function close(){
      setIsModalOpen(false);
    }

    function users(){
        setUser(true);
        setIsModalOpen(true);
       
    }
      function personnels(){
        setPersonnel(true);
        setMedical(true);
        setIsModalOpen(true);
          
      }
      function institutes(){
        setInstitute(true);
        setMedical(true);
        setIsModalOpen(true);
          
      }


    //   Form submission

    const initialValues = {
        fullname: "",
        email: "",
        role: "",
        phone: "",
        rcNumber: "",
        address: "",
        institution: "",
        password: "",
        price:"",
        certification: "",
        specialization:"",
        profilePicture: null, 
      };

    const [formData, setFormData] = useState(initialValues);

    const [formErrors, setFormErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, fullname: e.target.value });
        console.log(formData);
    };

    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();
    const congrat = () => {
    //   navigate("/Congrat");
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    //   const handleSubmit = (e) => {
    //     setFormErrors(validate(formData));
    //     setIsSubmit(true);
    //   };
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Set role based on state conditions
        let role;
        if (user) {
          role = "user";
        } else if (personnel || medical) {
          role = "personnel";
        } else if (institute) {
          role = "institute";
        }
      
        // Update formData with the determined role
        setFormData((prevData) => ({
          ...prevData,
          role: role,
        }));
      
        // Handle form validation
        setFormErrors(validate(formData));
        setIsSubmit(true);
      };
      
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formData);
        }
      }, [formErrors]);

      

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      

        if (user) {
            if (!values.fullname) {
                errors.fullname = "Full name is required";
              }else if (!values.email) {
                errors.email = "Email is required";
              }else if (!regex.test(values.email)) {
                errors.email = "This is not a valid email";
              }  else if (!values.phone) {
                errors.phone = "Phone number is required";
              }
              else if (!values.address) {
                errors.address = "Fill in your address";
              }else if (!values.password) {
                errors.password = "Password is required";
              } 
              else{
                Supabase.from("dokita_signup")
                .upsert([
                  {
                    fullname: formData.fullname,
                    email: formData.email,
                    role: 'user',
                    metadata: formData,
                  },
                ])
                .then((response) => {
                  console.log(response);
                  navigate("/login");
                });
                  
          };
        } else  if (personnel) {
            if (!values.fullname) {
                errors.fullname = "Full name is required";
              }else if (!values.specialization) {
                errors.specialization = "Specialization fee is required";
              }else if (!values.certification) {
                errors.certification = "Certification is required";
              }else if (!values.price) {
                errors.price = "Consultation price is required";
              }else if (!values.email) {
                errors.email = "Email is required";
              }else if (!regex.test(values.email)) {
                errors.email = "This is not a valid email";
              }  else if (!values.rcNumber) {
                errors.rcNumber = "RC Number is required";
              }
              else if (!values.address) {
                errors.address = "Fill in your address";
              } else if (!values.password) {
                errors.password = "Password is required";
              } 
              else{
                Supabase.from("dokita_signup")
                .upsert([
                  {
                    fullname: formData.fullname,
                    email: formData.email,
                    role: 'medical personnel',
                    metadata: formData,
                  },
                ])
                .then((response) => {
                  console.log(response);
                  navigate("/login");
                });
                  
          };
        } else  if (institute) {
             if (!values.institution) {
                errors.institution = "Name of Medical Institution is required";
              }else if (!values.email) {
                errors.email = "Email is required";
              }else if (!regex.test(values.email)) {
                errors.email = "This is not a valid email";
              }  else if (!values.rcNumber) {
                errors.rcNumber = "RC Number is required";
              }
              else if (!values.address) {
                errors.address = "Fill in your address";
              }else if (!values.password) {
                errors.password = "Password is required";
              } 
              else{
                Supabase.from("dokita_signup")
                .upsert([
                  {
                    // fullname: formData.fullname,
                    email: formData.email,
                    role: 'medical institution',
                    metadata: formData,
                  },
                ])
                .then((response) => {
                  console.log(response);
                  // alert('hello')
                  navigate("/login");
                });
                  
          };
        } 
            return errors;
        };
      



return (
  <div className='consult'>
      <header>
          <Link to='/'><img src={logo} alt="logo" /></Link>
          
      </header>

      <h1>Create An Account</h1>

      <section>
          <div onClick={users}><h3>Users</h3></div>
          <div onClick={personnels}><h3>Medical Personnel</h3></div>
          <div onClick={institutes}><h3>Medical Institution</h3></div>
      </section>




      {/* USERS */}

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
           <div>

        <section className='login-c'>
            <div className='log-l'>

                <header>
                <Link to='/'><img src={logo} alt="" /></Link>
                </header>

                
                {
                    user ?
                    <> <h1>User</h1>
                    {/* <input type="text" value='user' style={{visibility:'hidden'}} /> */}
                    </>
                    : null

                }

                {
                   personnel ? 
                   <> <h1>Medical Personnel</h1>
                    {/* <input type="text" value='medical personnel' style={{visibility:'hidden'}}/> */}
                    </>
                   : null

                }



                {
                  institute ? 
                  <> <h1>Medical Institution</h1>
                    {/* <input type="text" value='medical institution' style={{visibility:'hidden'}}/> */}
                    </>
                  : null

                }

                <h2>Create Account</h2>

                <div className='login-form'>

                {
                    user ? 
                    <>
                    <div className='inp'>
                        <FaUser className='log-icon log'/>
                        <input type="text" name="" id="" placeholder='Fullname' value={formData.fullname}
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            fullname: e.target.value,
                            });
                        }}/> <br />

                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.fullname}</p>
                    </>
                    
                    : null

                }

                

                {
                   personnel ? 
                   <>
                   <div className='inp'>
                        <FaUser className='log-icon log'/>
                        <input type="text" name="" id="" placeholder='Full Name of Medical Personnel'
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            fullname: e.target.value,
                            });
                        }}/>
                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.fullname}</p>

                    <div className='inp'>
                        <FaFileInvoice className='log-icon log'/>
                        <input type="text" name="" id="" placeholder='Specialization e.g Pediatrics'
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            specialization: e.target.value,
                            });
                        }}/>
                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.specialization}</p>



                    <div className='inp'>
                        <FaFileInvoice className='log-icon log'/>
                        <input type="text" name="" id="" placeholder='Certification e.g MBBS, Ph.D'
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            certification: e.target.value,
                            });
                        }}/>
                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.certification}</p>
                    
                    <div className='inp'>
                        <FaMoneyBillWave className='log-icon log'/>
                        <input type="text" name="" id="" placeholder='Consultation fee e.g ₦5000'
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            price: e.target.value,
                            });
                        }}/>
                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.price}</p>

                    {/* <div className='inp'>
                        <input type="file" name="profilePicture" onChange={handleChange} />

                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.profilePicture}</p> */}

                    
                    </>
                   : null

                }       

                
{
                  institute ? 
                  <>
                    <div className='inp'>
                        <FaUser className='log-icon log'/>
                        <input type="text" name="" id="" placeholder='Name of Medical Institution'
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            institution: e.target.value,
                            });
                        }}/>
                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.institution}</p>
                    </>
                  : null

                }

                

                <div className='inp'>
                    <HiOutlineMail className='log-icon log'/>
                    <input type="email" name="" id="" placeholder='Email'onChange={(e) => {
                            setFormData({
                            ...formData,
                            email: e.target.value,
                            });
                        }}/>
                </div>
                <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.email}</p>



                

                {
                    user ? 
                    <>
                    <div className='inp'>
                        <FaPhone className='log-icon log'/>
                        <input type="tel" name="" id="" placeholder='Phone Number'
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            phone: e.target.value,
                            });
                        }}/>
                    </div>
                    <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.phone}</p>
                    </>

                    
                    : null

                }
                

                {
                    medical ? 
                        <>
                        <div className='inp'>
                            <FaPhone className='log-icon log'/>
                            <input type="text" name="" id="" placeholder='RC Number'
                            onChange={(e) => {
                                setFormData({
                                ...formData,
                                rcNumber: e.target.value,
                                });
                            }}/>
                        </div>
                        <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.rcNumber}</p>
                    </>

                    :null
                }

                

                <div className='inp'>
                    <IoLocationSharp className='log-icon log'/>
                    <input type="text" name="" id="" placeholder='Address'
                    onChange={(e) => {
                        setFormData({
                        ...formData,
                        address: e.target.value,
                        });
                    }}/>
                </div>
                <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.address}</p>

                <div className='inp'>
                    <IoMdLock className='log-icon log'/>
                    <input type="password" name="" id="" placeholder='Password'
                    onChange={(e) => {
                        setFormData({
                        ...formData,
                        password: e.target.value,
                        });
                    }}/>
                    <FaEye className='log-icon'/>
                </div>
                <p style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.password}</p>

                

                <button type="submit" onClick={handleSubmit} style={{cursor:'pointer'}}>Create Account</button>

                <p>Have an account? <Link to='/login'>Log In</Link></p>

                </div>

                

            </div>

            <div className='log-r'>
                {
                    user ? 
                    <img src={use} alt="" style={{backgroundColor:'#fff'}}/>
                    :null
                }

{
                    personnel? 
                    <img src={person} alt="" />
                    :null
                }

{
                    institute ? 
                    <img src={institut} alt="" />
                    :null
                }
            </div>
        </section>  
    </div>
          
        </Modal>


       

        


  </div>
)
}

export default Create