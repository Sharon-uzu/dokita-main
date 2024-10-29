import React from 'react';
import t1 from '../Assets/e1.png'
import t2 from '../Assets/e2.png'
import t3 from '../Assets/e3.png'
import t4 from '../Assets/e4.png'
import { Testimony } from '../utils/Data';


const Testimonial = () => {
  return (
    <div className='testimonial'>

        <h1>Patients Testimonials</h1>

        <div className="test">

        {
                Testimony && Testimony.map(item =>(

                    <div className="test1" key={item.id}>
                        <div className='test1-c'>

                            <div>
                                <img src={item.pix} alt="" />
                                <p>{item.name}</p>
                            </div>
                        
                            <p className='text'>{item.para}</p>
                        </div>
                        
                    </div>
                ))
            }

            

        </div>
    </div>
  )
}

export default Testimonial