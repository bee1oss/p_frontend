import React from 'react'

function SkilCard(props) {
  // const { title, description } = props
  return (
    <div className="card-grid">
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SkilCard
