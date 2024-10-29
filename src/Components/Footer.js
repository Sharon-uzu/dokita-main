import React from 'react';
import foot from '../Assets/foot.png'
import { RiWhatsappFill } from "react-icons/ri";
import {FaFacebook} from 'react-icons/fa'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="foot">
            {/* <img src={foot} alt="" /> */}

            <div className='foot-logo'>
              <h1><span>D</span><span>O</span><span>K</span><span>I</span><span>T</span><span>A</span></h1>
              <div>
                <RiWhatsappFill className='foot-social'/>
                <FaFacebook className='foot-social'/>
                <FaSquareInstagram className='foot-social'/>
                <FaSquareXTwitter className='foot-social'/>

              </div>
            </div>
                
            <div className='foot-c'>

              <div>
                <h2>Company</h2>

                <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Terms of Use</a></li>
                  <li><a href="">Piracy Policy</a></li>
                </ul>
              </div>

            </div>

            <div className='foot-c'>

              <div>
                <h2>Get Help</h2>

                <ul>
                  <li><a href="">Support Carrier</a></li>
                  <li><a href="">24hr Service</a></li>
                  <li><a href="">Quick Chat</a></li>
                </ul>
              </div>

              

            </div>

            <div className='foot-c'>

              <div>
                <h2>Support</h2>

                <ul>
                  <li><Link to='/faq'>FAQ</Link></li>
                  <li><a href="">Policy</a></li>
                  <li><a href="">Business</a></li>
                </ul>
              </div>

            </div>

        </div>
        
    </div>
  )
}

export default Footer