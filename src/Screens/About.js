import React from 'react'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { FaHeartPulse } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { IoRibbonSharp } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaHandFist } from "react-icons/fa6";
import us from '../Assets/b1.png'
import Footer from '../Components/Footer';



const About = () => {
  return (
    <div className='about-us'>
        <Header/>

        <div className="about">

            <div className="abt-l">
                <h5>ABOUT US</h5>
                <h1>What We are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae mollitia modi asperiores laboriosam accusamus sed voluptate animi ut perferendis! Vero laboriosam dignissimos laborum distinctio voluptatem doloribus iusto atque asperiores!

                </p>

                <div className="ct">
                    <button><Link to='/contact'>Contact Us</Link></button>
                </div>
            </div>

            <div className="abt-r">

                <img src={us} alt="" />

                

            </div>

        </div>

        


        <section className='health'>

            <h2>Core Values</h2>

            <div className='benefits'>
                <div>
                    <FaHandHoldingHeart className='p-icon'/>
                    <h3>Empathy</h3>
                    <p>Demonstrating genuine care and understanding for patients' physical and emotional well-being.</p>
                </div>

                <div>
                    <FaHandFist className='p-icon'/>
                    <h3>Integrity</h3>
                    <p>Maintaining honesty, transparency, and ethical conduct in all professional interactions, fostering trust with patients and colleagues.</p>
                </div>

                <div>
                    <FaPeopleRoof className='p-icon'/>
                    <h3>Collaboration</h3>
                    <p>Working seamlessly with multidisciplinary teams, recognizing the importance of collective expertise in providing comprehensive healthcare.</p>
                </div>

                <div>
                    <IoRibbonSharp className='p-icon'/>
                    <h3>Professionalism</h3>
                    <p>Adhering to high standards of competence, continuous learning, and upholding the dignity and respect of patients and colleagues.</p>
                </div>

                <div>
                    <FaHeartPulse className='p-icon'/>
                    <h3>Patient-Centered Care</h3>
                    <p>Prioritizing the individual needs and preferences of patients, involving them in decision-making processes, and tailoring services to promote the best possible outcomes.</p>
                </div>

                <div>
                    <FaScaleBalanced className='p-icon'/>
                    <h3>Advocacy for Health Equity</h3>
                    <p>Championing fairness and inclusivity in healthcare, addressing disparities, and striving to ensure equal access to quality services for all individuals.</p>
                </div>

            </div>

        </section>

        <Footer/>

    </div>
  )
}

export default About