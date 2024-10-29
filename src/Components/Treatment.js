import React from 'react';
import { Treatments } from '../utils/Data';
import { Specialists } from '../utils/Data';

const Treatment = () => {
  return (
    <div className='treatment'>
        <h2>Quick solutions for best treatment </h2>
        <h3>Our consultation categories</h3>


        <section className='treat-cards'>

            {
                Treatments && Treatments.map(item =>(
                    <div className='treat-c' key={item.id}>
                        <h4>{item.text}</h4>
                    </div>
                ))
            }

            

        </section>


        <section className='booking'>

            <div className='book'>
                <h5>Find best doctor</h5>
            </div>

            <div className='book'>
                <h5>Make an appointment</h5>
            </div>

            <div className='book'>
                <h5>Take prescription</h5>
            </div>


        </section>

        <section className='specialist'>

            <h2>Meet Our Medical Specialist</h2>



            {
                Specialists && Specialists.map(item =>(
                    <div key={item.id}>
                        <img src={item.image} alt="" />
                        <p>{item.text}</p>
                    </div>
                ))
            }

            
        </section>
        
    </div>
  )
}

export default Treatment