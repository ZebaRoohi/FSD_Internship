import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponet = () => {
    const greeting='Hi Good Afternoon';
    const name='John';
  return (
    <div>
      <ChildComponent greeting={greeting} name={name} />
    </div>
  )
}

export default ParentComponet
