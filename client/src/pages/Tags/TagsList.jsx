import React from 'react'
import "./Tags.css"
const TagsList = ({Tag}) => {
  return (
    <div>
      <div className="tag">
        <h5>{Tag.tagName}</h5>
        <p>{Tag.tagDesc}</p>
      </div>
    </div>
  )
}

export default TagsList
