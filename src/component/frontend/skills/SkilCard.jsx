import React from 'react'

function SkilCard(props) {
  // const { title, description } = props
  return (
    <div class="card-grid">
      <div class="card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SkilCard
