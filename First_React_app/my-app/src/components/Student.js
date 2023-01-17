import React from 'react'
import Comp from './Comp'
import propTypes from 'prop-types'

function Student({name}) {
  return (
    <div>
      <h1>{name}</h1>
      <Comp name={name} />
    </div>
  )
}

Student.propTypes = {
  name:propTypes.string
}

Student.defaultProps = {
  name:"Name"
}

export default Student



