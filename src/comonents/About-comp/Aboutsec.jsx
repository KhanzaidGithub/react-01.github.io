import React from 'react'
import './Aboutsec.css'
import Aboutinnercol1 from './Aboutinnercol1'
import Aboutinnercol2 from './Aboutinnercol2'

const Aboutsec = () => {
  return (
    <div className='aboutsec'>
     <div className="about-col">
      <Aboutinnercol1/>
      <Aboutinnercol2/>
      
     </div>
    </div>
  )
}

export default Aboutsec
