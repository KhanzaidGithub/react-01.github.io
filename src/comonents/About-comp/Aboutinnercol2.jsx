import React from 'react'
import './Aboutinnercol2.css'
import Smallbtn from '../Button-Comp/Smallbtn'
import Mediambtn from '../Button-Comp/Mediambtn'



const Aboutinnercol2 = () => {
  return (
    <div className="aboutinner-col2">
         <Smallbtn name="about us"/>
        <h2 className='abouth2'>
        Introducing Tuskers <br />
        Care Solutions
        </h2>
        <p>
        Tuskers Care Solutions Limited offers Domiciliary Care services for Adults aged 18-65 and Adults aged 65+, those with Physical Disabilities, Mental Health, Dementia and Sensory impairment. We will be offering Personal Care, Domiciliary Care, Respite Care, End of Life Care, Medication Management, Live in care and Companionship Services. We are a Private Limited Company, incorporated on 21st of June 2023.
        </p>
        <Mediambtn name="read more"/>
      </div>
  )
}

export default Aboutinnercol2
