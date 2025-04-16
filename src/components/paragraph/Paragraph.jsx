import React from 'react'

function Paragraph(props) {
  return (
    <p className='about-text'>
      {props.children}
    </p>
  )
}

export default Paragraph
