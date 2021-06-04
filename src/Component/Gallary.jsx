import React from 'react'
import image from '../assets/sample.jpeg'
import './Gallary.scss'

export default function Gallary() {
  return (
    <div className="gallary">
      <img className="gallaryImage" src={image} alt="12" />
      <img className="gallaryImage" src={image} alt="12" />
      <img className="gallaryImage" src={image} alt="12" />
      <img className="gallaryImage" src={image} alt="12" />
    </div>
  )
}
