import React from 'react'
import './Servicescard.css'

const Servicescard = (props) => {
  return (
    
        <div className='card'>
        <img src={props.imgsrc} alt="" />
        <h1>{props.heading}</h1>
        </div>
      
   
    
  )
}

export default Servicescard
