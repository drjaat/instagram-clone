import React from 'react'
import Header from './Component/Header'
import StoryCard from './Component/StoryCard'
import PostCard from './Component/PostCard'
import Suggestion from './Component/Suggestion'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="displayflex">
        <div className="container">
          <StoryCard />
          <PostCard />
        </div>
        <Suggestion />
      </div>
    </div>
  )
}
