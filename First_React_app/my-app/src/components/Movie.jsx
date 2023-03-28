import React from 'react'

function Movie(props) {
  return (
    <div>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <p>{props.year}</p>
    </div>
  )
}

export default Movie