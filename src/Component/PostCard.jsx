import React from 'react'
import image from '../assets/sample.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PostCard.scss'
import {
  faEllipsisH,
  faHeart,
  faComment,
  faShare,
  faBookmark,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import ProfileIcon from './ProfileIcon'

const ellipsis = (
  <FontAwesomeIcon icon={faEllipsisH} size="s" className="icon" />
)
const heart = <FontAwesomeIcon icon={faHeart} size="s" />
const comment = <FontAwesomeIcon icon={faComment} size="s" />
const share = <FontAwesomeIcon icon={faShare} size="s" />
const bookmark = <FontAwesomeIcon icon={faBookmark} size="s" />
const smile = <FontAwesomeIcon icon={faSmile} size="s" />

export default function PostCard() {
  return (
    <div className="card card-width">
      <div className="card-body">
        <ProfileIcon />
        <h5 class="card-title">
          Profile Title {ellipsis}
          <br />
          <span>location</span>
        </h5>
        <img class="card-img-top" src={image} alt="sample" />
        <div className="float-left">
          {heart}
          <span className="spacer" />
          {comment}
          <span className="spacer" />
          {share}
        </div>
        <div className="float-right">{bookmark}</div>
      </div>
      <div className="comments">
        <span>10 Likes</span>
        <div>
          <ul>
            <li>top comments 1</li>
            <li>top comments 1</li>
            <li>top comments 1</li>
          </ul>
          Post Time
          <hr />
          {smile}
          <input type="text" placeholder="add Comment" />
        </div>
      </div>
    </div>
  )
}
