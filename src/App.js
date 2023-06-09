import React, { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import usePosts from './hooks/usePosts'

// * Data from database
// const initPosts = [
//   {
//     id: 1,
//     title: "Let's learn React!",
//   },
//   {
//     id: 2,
//     title: 'How to install Node.js',
//   },
//   {
//     id: 3,
//     title: 'Basic HTML',
//   },
// ]

function App() {
  const { posts, setPosts, isLoading } = usePosts()
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostBody, setNewPostBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // POST request to https://jsonplaceholder.typicode.com/posts
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newPostTitle,
          body: newPostBody,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await res.json()

      console.log(data)

      setPosts([...posts, data])
    } catch (err) {
      console.log(err)
    }

    setNewPostTitle('')
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />

        <label>Body:</label>
        <input type="text" value={newPostBody} onChange={(e) => setNewPostBody(e.target.value)} required />

        <input type="submit" value="Post" />
      </form>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default App
