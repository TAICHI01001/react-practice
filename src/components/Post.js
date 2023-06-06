import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  const { post } = props
  const handleClick = (id) => {
    alert(`Post id${id} clicked`)
  }

  return (
    <div className={classes.first}>
      <div onClick={() => handleClick} className={classes.post}>
        <p>id: {post.id}</p>
        <p>title: {post.title}</p>
      </div>
    </div>
  )
}

export default Post
