import React from 'react'
import './Navlist.css'
import { Link } from 'react-router-dom'


const Navlist = () => {
  return (
    <div className='nav-list'>
        <ul>
            <li><Link to ="./"> Home</Link></li>
            <li><Link to ="./About"> about us</Link></li>
            <li><Link to ="./Contact"> contact us</Link></li>
            <li><Link to ="./Services"> services</Link></li>
        </ul>

    </div>
  )
}

export default Navlist
