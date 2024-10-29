import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar3 from '../UserComponents/Sidebar3';
import dp from '../../Assets/A 1.png'
import { CiSearch } from "react-icons/ci";
import Profile from '../UserComponents/Profile';


const UserSettings = () => {
  return (
    <div>
      <section className='main-dash'>

        <Sidebar3/>

        <div className='main'>
          <Profile/>

          <div className='setting'>

            <h3>Edit Profile</h3>

            <form className='form'>
            <div>
                <input type="text" placeholder='First Name'/>
            </div>

            <div>
                <input type="email" placeholder='Your Email Address' />
            </div>

            <div>
                <input type="tel" placeholder='Phone Number'/>
            </div>

            <div>
                <input type="text" placeholder='Address' />
            </div>

            <div>
                <input type="text" placeholder='Blood group' />
            </div>

            <div>
                <input type="text" placeholder='Genotype' />
            </div>

            <div>
                <select name="" id="">
                    <option value="">Select Gender</option>
                    <option value="Male"></option>
                    <option value="Female"></option>
                </select>
            </div>

            <div>
                <input type="text" placeholder='Allergies eg Penicillin' />
            </div>

            

            <section>

                <p>Date Of Birth</p>
                <div>
                    <input type="date"  />
                </div>

            </section>

            
            <section>

                <p>Emergency Contact</p>
                <div>
                    <input type="text"  placeholder='eg John(Spouse), 09152433673'/>
                </div>

            </section>

            <section>

                <p>Past Condition</p>
                <div>
                    <input type="text"  placeholder='eg Hypertension'/>
                </div>

            </section>


            <section>

                <p>Surgery</p>
                <div>
                    <input type="text"  placeholder='eg Apendix Removal'/>
                </div>

            </section>


           


            <section>

                <p>Family History</p>
                <div>
                    <input type="text"  placeholder='eg Diabetes'/>
                </div>

            </section>


            <section>

                <p>Upload Profile Picture</p>
                <div>
                <input type="file" name="" id="" />
                </div>

            </section>
            


            <div>
                <input type="password" placeholder='Change password' />
            </div>



            <button type="submit">Submit</button>

            </form>
        </div>
          

        </div>

      </section>


      
        
    </div>
  )
}

export default UserSettings