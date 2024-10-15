import React from 'react'
import steph from '../assets/steph.jpg'
import './css/navigation.css'

const Navigation = ({title}) => {
  return (
    <div className='nav-container'>
       <h1 className='nav-title'>{title}</h1>
        <a href="https://github.com/stephalipin" target='blank' alt='autor'><img className='auth-image' src={steph} alt="author" /></a>
    </div>
  )
}

export default Navigation