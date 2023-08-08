import React from 'react'

function Movies (props) {
  return (
    <div> 
      <p><h2><a href="/">Home</a></h2></p>
      <h1>My favorite movie is: </h1>
      
      <p>
        <h2>movies: {props.movies}</h2>
      </p>
    </div>
  )
}

export default Movies