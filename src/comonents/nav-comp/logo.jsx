import React from 'react'
import './logo.css'

const Logo = (props) => {
  return (
    <div className='logo'>
      <img src={props.logo} alt=""/>
    </div>
  )
}

export default Logo
