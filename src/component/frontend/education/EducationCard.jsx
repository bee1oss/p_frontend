import React from 'react'

function EducationCard(props) {
  return (
      <div className="card">
        <h3>{props.name}</h3>
        <p><strong>{props.faculity}</strong></p>
        <p>{props.departmen}</p>
        <p>Graduated:{props.graduated}</p>
      </div>
  )
}

export default EducationCard
