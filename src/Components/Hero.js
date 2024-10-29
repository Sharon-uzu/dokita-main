import React from 'react'
import hero from '../Assets/d1.png'

const Hero = () => {
  return (
    <div>
        <section className='hero-section'>

            <div className='hero-l'>
                <h1>Consult a doctor at the comfort of your home</h1>
                <p>Talk with a doctor using our highly secured HIPPA complaint end-end encrypted video call.</p>

                <button>Ask a Doctor Online</button>

            </div>

            <div className='hero-r'>
                <img src={hero} alt="" />

            </div>

        </section>
    </div>
  )
}

export default Hero