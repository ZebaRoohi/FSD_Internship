/*import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <h3>Child componenet</h3>
      <p>{props.greeting} {props.name}</p>
    </div>
  )
}

export default ChildComponent*/

import React from 'react'

const ChildComponent = ({greeting,name}) => {
  return (
    <div>
      <h3>Child compoennt with desctructering</h3>
      <p>{greeting} {name}</p>
    </div>
  )
}

export default ChildComponent

