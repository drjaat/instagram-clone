import React from 'react'
import './StoryCard.scss'
import ProfileIcon from './ProfileIcon'

export default function StoryCard() {
  return (
    <div className="card card-width">
      <div>
        <ProfileIcon />
        <ProfileIcon />
        <ProfileIcon />
      </div>
    </div>
  )
}
