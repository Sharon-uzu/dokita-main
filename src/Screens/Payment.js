import React from 'react'
import logo from '../Assets/logo2.png'
import pay from '../Assets/Business communication via online messages.png'
import { MdPayments } from "react-icons/md";
import { FaUser } from 'react-icons/fa';
import { BiCreditCard } from "react-icons/bi";
import { RiCalendarLine } from "react-icons/ri";
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Payment = () => {
  return (
    <div className='payment'>
        <Link to='/'><header>
            <img src={logo} alt="" />
        </header></Link>
        
        <h2>Make Payment</h2>
        <p className='step'>One more step to finalize your audio/video consultancy</p>

        <div className="pay">
          <form className='p-f'>

            <p>Payment Method</p>
            <div>
              <MdPayments className='p-i'/>
              <select name="" id="">
                <option value="debit">Debit card</option>
                <option value="credit">Credit Card</option>
              </select>
            </div>

            <p>Cardholder Name</p>
            <div>
              <FaUser className='p-i'/>
              <input type="text" name="" id="" placeholder='Marie John' className='inp'/>
            </div>

            <p>Cardholder Number</p>
            <div>
              <BiCreditCard className='p-i'/>
              <input type="text" name="" id="" placeholder='5678  7790  6543  2357' className='inp'/> 
            </div>

            <p>Expiry Date</p>
            <div>
              <RiCalendarLine className='p-i'/>
              <input type="text" name="" id="" placeholder='20/25' className='inp'/>
            </div>

            <p>Cvv</p>
            <div>
              <AiFillLock className='p-i'/>
              <input type="text" name="" id="" placeholder='5678' className='inp'/>
            </div>

            <span className='rem'>
              <input type="checkbox" name="" id="" />
              <span>Remember my card</span>
            </span>


            <section className='btn'>
              <button>Checkout</button>
            </section>

          </form>

          <div className='pay-pix'>
            <img src={pay} alt="" />
          </div>
        </div>

        
    </div>
  )
}

export default Payment