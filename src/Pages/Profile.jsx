import React from 'react'
import ProfileIcon from '../Component/ProfileIcon'
import { Button } from 'react-bootstrap'
import './Profile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Header from '../Component/Header'
import StoryCard from '../Component/StoryCard'
import Gallary from '../Component/Gallary'
import Tabs from '../Component/Tabs'

const cog = <FontAwesomeIcon icon={faCog} size="lg" />

export default function Profile() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="profile">
          <ProfileIcon />
          <div>
            UserName
            <Button
              variant="secondary"
              type="submit"
              style={{ width: '150px' }}
            >
              Edit profile
            </Button>
            {cog}
            <div class="break"></div>
            total post followers following
            <div class="break"></div>
            username
            <div class="break"></div>
            discription
          </div>
        </div>
        <StoryCard />
        <hr />
        <Tabs />
        <Gallary />
      </div>
    </>
  )
}
