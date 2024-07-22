import React from 'react'
import './Button.css'

const Smallbtn = (props) => {
  return (
    <div>
      <a href="#" className='small-btn'>{props.name}</a>
    </div>
  )
}

export default Smallbtn

