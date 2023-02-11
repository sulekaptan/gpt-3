import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='features-container'>
      <div className="features-container-title">
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='features-container-text'>
         {text}
      </div>
    </div>
  )
}

export default Feature;