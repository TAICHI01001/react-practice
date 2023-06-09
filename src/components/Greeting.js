import React, { useState } from 'react'
import classes from './Greeting.module.css'

const Greeting = (props) => {
  // const { name } = props
  // const isLogin = true
  const [name, setName] = useState('Men')

  const handleClick = () => {
    setName('John')
  }

  return (
    <>
      <div className={classes.card}>
        <h3>Welcome!</h3>
        <p>{name}</p>
        {/* <p>{isLogin ? name : 'Unknown'}</p> */}
      </div>
      <button onClick={handleClick}>Change name</button>
    </>
  )
}

export default Greeting
