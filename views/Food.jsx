import React from 'react'

function Food (props) {
  return (
    <div>
      <p><h2><a href="/">Home</a></h2></p>
      <h1>My favorite food is: </h1>
      <p>
        <h3>{props.food}</h3>
      </p>
    </div>
  )
}

export default Food