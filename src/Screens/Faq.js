import React, {useState} from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

import { IoIosArrowDropup } from "react-icons/io";


const Faq = () => {

    const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);

  const [ans4, setAns4] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [ans5, setAns5] = useState(false);
  const [open5, setOpen5] = useState(true);

  const [ans6, setAns6] = useState(false);
  const [open6, setOpen6] = useState(true);

  const [ans7, setAns7] = useState(false);
  const [open7, setOpen7] = useState(true);


  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

  const click4 = () => {
    setAns4(true);
    setOpen4(false);
  }

  const clickRev4 = () => {
    setAns4(false);
    setOpen4(true);
  }

  const click5 = () => {
    setAns5(true);
    setOpen5(false);
  }

  const clickRev5 = () => {
    setAns5(false);
    setOpen5(true);
  }


  const click6 = () => {
    setAns6(true);
    setOpen6(false);
  }

  const clickRev6 = () => {
    setAns6(false);
    setOpen6(true);
  }

  const click7 = () => {
    setAns7(true);
    setOpen7(false);
  }

  const clickRev7 = () => {
    setAns7(false);
    setOpen7(true);
  }


  return (
    <div id='faq' className='faqs'>
        <h1>FAQs</h1>


        <div className='w-r'>
                    <div className="ques">
                        <div>
                            {
                                open ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev}/>

                            }
                        
                        </div>

                        <div>
                            <h4>How secure is my personal health information on this platform?</h4>

                            {  ans ? (
                                <p>We prioritize your privacy and security. Our platform employs robust encryption methods and follows strict guidelines to safeguard your health information. We adhere to industry standards and regulations to ensure the confidentiality of your data. Even Dokita does not have access to your information.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open1 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click1}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev1}/>

                        }
                        
                        </div>

                        <div>
                        <h4>What types of medical professionals are available for consultation?</h4>

                        {  ans1 ? (
                            <p>Our platform offers access to a diverse range of licensed healthcare professionals, including doctors, specialists, therapists, and more. You can select the professional that best suits your needs.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open2 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click2}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev2}/>

                        }
                        
                        </div>

                        <div>
                        <h4>How can I schedule or cancel appointments with healthcare providers?</h4>

                        {  ans2 ? (
                            <p>Scheduling and cancelling appointments is easy. Simply log in to your account, select the desired time slot from available options, and make changes as needed. Our platform also allows for convenient rescheduling and cancellation.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>




                    <div className="ques">

                        <div>
                          {
                              open3 ? (
                              <IoIosArrowDropdown className='arr-icon' onClick={click3}/>

                              ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev3}/>

                          }
                        
                        </div>

                        <div>
                          <h4>What kind of conditions or ailments can be addressed through this platform?</h4>

                          {  ans3 ? (
                              <p>
                              Our platform caters to a wide range of health concerns, from routine check-ups to specialized care. You can seek assistance for conditions such as cold and flu symptoms, chronic illnesses, mental health issues, and more. Our professionals cover a broad spectrum of medical needs.</p>
                              ):null
                          }
                        
                        </div>

                        

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open4 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click4}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev4}/>

                            }
                        
                        </div>

                        <div>
                            <h4>Can The Keyboard scale its services according to my business needs?</h4>

                            {  ans4 ? (
                                <p>Certainly. The Keyboard is well-equipped to scale services according to your business requirements through our globally distributed workforce. Whether you're in a phase of expansion, encountering peak periods, or require downsizing, we possess the flexibility and resources to adapt our services to align with your changing needs. Our aim is to offer proprietary firms  a customer care solution that mirrors the dynamism of their business.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open5 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click5}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev5}/>

                            }
                        
                          </div>

                        <div>
                            <h4>How does The Keyboard maintain stability in service delivery?</h4>

                            {  ans5 ? (
                                <p>The Keyboard guarantees service delivery stability by combining our globally distributed workforce with adherence to established and proven business continuity practices. Our robust infrastructure and proficient team create a reliable foundation for consistent service delivery. We have established systems to handle contingencies, assuring uninterrupted service and upholding the high quality our clients anticipate.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>


                    <div className="ques">
                        <div>
                            {
                                open6 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click6}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev6}/>

                            }
                        
                          </div>

                        <div>
                            <h4>Does The Keyboard have industry-specific expertise?</h4>

                            {  ans6 ? (
                                <p>Certainly, The Keyboard possesses 7 year of financial trading  experience under our sleeves and worked with various proprietary firms both as clients and backend support team. This broad expertise guarantees our comprehension of the distinctive challenges and demands within the proprietary firm  industry. We apply this knowledge in every interaction, providing customized solutions that address industry-specific needs and challenges. Our objective is to furnish your firm with services that not only meet but surpass industry standards.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">
                        <div>
                            {
                                open7 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click7}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev7}/>

                            }
                        
                          </div>

                        <div>
                            <h4>How does The Keyboard ensure accountability in its services?</h4>

                            {  ans7 ? (
                                <p>Accountability stands as a fundamental principle in the services offered by The Keyboard. Our operations are supervised by committed team leaders and quality assurance specialists, ensuring strict adherence to our elevated standards. Furthermore, we prioritize transparency by furnishing regular reports and updates to our clients. This grants you complete visibility into our performance and establishes accountability for the results we achieve. Our objective is to furnish you with a reliable service supported by a team fully accountable for its performance.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>
                    

                  </div>
              </div>
  )
}

export default Faq