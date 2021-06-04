import React from 'react'

export default function Tabs() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          POSTS
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          REELS
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          IGTV
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          SAVED
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          TAGGED
        </a>
      </li>
    </ul>
  )
}
