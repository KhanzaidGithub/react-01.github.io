import React from 'react'
import './Contactsec.css'
import Contactcol1 from './Contactcol1'
import Contactcol2 from './Contactcol2'


const Contactsec = () => {
  return (
   <div className="contactsec">
    <div className="container">
        <div className="contact-col">
            <Contactcol1/>
            <Contactcol2/>
        </div>
    </div>
   </div>
  )
}

export default Contactsec
