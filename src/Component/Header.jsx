import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHome} size="lg" />
const heartIcon = <FontAwesomeIcon icon={faHeart} size="lg" />
const fbMessengerIcon = <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />

export default function Header() {
  return (
    <header>
      <h3>Instagram</h3>
      <input className="formcontrol" type="text" placeholder="search" />
      <div className="icon-list">
        {homeIcon}
        <span className="spacer" />
        {fbMessengerIcon}
        <span className="spacer" />
        {heartIcon}
        <span className="spacer" />
        <span className="profileIcon">img</span>
      </div>
    </header>
  )
}
