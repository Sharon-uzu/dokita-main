import React, {useState} from 'react';
import logo from '../Assets/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import dr from '../Assets/dr.png'
import Calender from '../Components/Calender';


const Consult = () => {

    const [available, setAvailable] = useState()
    const [reminder, setReminder] = useState()


    const Time= [10,12,2,3,4];

    const Reminder = [40,35,30,25,10];

    const navigate = useNavigate();

    const confirm = () => {
        navigate('/payment')
    }


    
  return (
    <div className='consults'>
        <header>
          <Link to='/'><img src={logo} alt="logo" /></Link>
          
         </header>
         <h1>Start Audio/Video Consultation</h1>


         <form className='consultation'>

            <div className='consult-l'>

                <div className='consult-l-card'>
                    <img src={dr} alt="" />
                    <div className='consult-l-c'>
                        <h2>Dr. Telly Splash (MBBS, Ph.D)</h2>
                        <p>Specialist Opthalmalogy</p>

                        <span className='rate'>
                            <span className='stars'>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                                <FaStar className='star-icon'/>
                            </span>

                            <span className='bill'>
                                $10/hr
                            </span>
                        </span>
                    </div>
                </div>


                <h3>Preferred Means of Consultation</h3>

                <div className='consult-l-button'>
                    <button>Audio</button>
                    <button>Video</button>
                </div>

            </div>

            <div className='consult-r'>

                <div className='calender'>

                    <Calender/>

                </div>

                <div className='time'>
                    <h3>Available Time</h3>

                    {/* <div>
                        <button>10:00 <br />
                            AM
                        </button>

                        <button>12:00 <br />
                            AM
                        </button>
                        <button>2:00 <br />
                            AM
                        </button>
                        <button>3:00 <br />
                            AM
                        </button>
                        <button>4:00 <br />
                            AM
                        </button>
                    </div> */}

                    <div> 

                            {Time && Time.map((item, index)=>{
                                 return(
                                    <button type='button' onClick={()=>{
                                        setAvailable(item)
                                    }} style={{backgroundColor: available == item ? '#265193' : '#CFDFE9', color: available == item ? '#fff' : '#265193'}}>
                                        <p>{item}:00 </p>
                                        <p>{item < 10 || item == 12 ? "PM":"AM"}</p>
                                    </button>
            
                                        )
                            })}

                    </div>


                    <h3>Set Reminder</h3>

                    {/* <div>
                        <button>40 <br />
                            Minutes
                        </button>

                        <button>35 <br />
                            Minutes
                        </button>
                        <button>30 <br />
                            Minutes
                        </button>
                        <button>25 <br />
                            Minutes
                        </button>
                        <button>10<br />
                            Minutes
                        </button>
                    </div> */}

                    <div>

                        {Time && Time.map((item, index)=>{
                            return(
                                <button type='button' onClick={()=>{
                                    setReminder(item)
                                }} style={{backgroundColor: reminder == item ? '#265193' : '#CFDFE9', color: reminder == item ? '#fff' : '#265193'}}>
                                <p>{item} </p>
                                <p>Minutes</p>
                                </button>
                
                                            )
                                })}

                    </div>


                    <div className='conf'>
                        <button style={{cursor:'pointer'}} onClick={confirm}>Confirm</button>
                    </div>

                    

                </div>

            </div>

         </form>
         
    </div>
  )
}

export default Consult