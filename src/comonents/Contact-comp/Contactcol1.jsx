import React from 'react'
import './Contactcol1.css'
import Smallbtn from '../Button-Comp/Smallbtn'
import Mediambtn from '../Button-Comp/Mediambtn'



const Contactcol1 = () => {
  return (
    <div>
      <div className="contect-heading">
      <Smallbtn name="contact us"/>
      <h2 className='Contacth2'>
      We’re here to Help You!
        </h2>
        <p>
        At Tuskers Care Solutions, we specialise in providing personalised heartfelt care with compassion tailored to meet your unique needs. Whether you have inquiries about our services, require assistance, wish to arrange a consultation or request a call-back to discuss your requirements, our dedicated team is here to assist you. Please complete the form below or contact us directly, and we will respond as soon as possible. Your comfort and well-being are our highest priorities
        </p>
        </div>
        <div className="farm">
          <div className="farm-inner">
          <input type="text" placeholder='name' />
          <input type="text" placeholder='email'/>
          </div>
          <input type="option" placeholder='Type Your Meassage Here'/>
          <input type="text" placeholder='Type Your Meassage Here'/>
          

        </div>
        <Mediambtn name="submit now"/>
    </div>
  )
}

export default Contactcol1
