import React, { useState } from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  const { post } = props
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.post}>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      {isShow && <p>more post information...</p>}
      <button onClick={toggleShow}>{isShow ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}

export default Post
