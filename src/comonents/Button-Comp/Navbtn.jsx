import React from 'react'
import './Button.css'

const Navbtn = (props) => {
  return (
    <div>
      <a href="#" className='nav-btn'>{props.name}</a>
    </div>
  )
}

export default Navbtn
