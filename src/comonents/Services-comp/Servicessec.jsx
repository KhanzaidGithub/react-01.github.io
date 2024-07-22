import React from 'react'
import './Servicessec.css'
import Servicesheading from './Servicesheading'
import Servicescard from './Servicescard'
import Mediambtn from '../Button-Comp/Mediambtn'


const Servicessec = () => {
  return (
    <>
    <div className='Servicessec'>
      <div className="container">
        <Servicesheading/>
        <div className="cards">
        <Servicescard imgsrc="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p1.png" heading="Personal care"/>
        <Servicescard imgsrc="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p2.png" heading="DOMICILIARY CARE"/>
        <Servicescard imgsrc="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p3.png" heading="RESPITE CARE"/>
        <Servicescard imgsrc="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p1.png" heading="Personal Care"/>
        <Servicescard imgsrc="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p2.png" heading="DOMICILIARY CARE"/>
        <Servicescard imgsrc="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/p3.png" heading="RESPITE CARE"/>
        
        </div>
        
       <Mediambtn className="services-mediambtn" name="view more"/>
      </div>
    </div>
    </>
  )
}

export default Servicessec
