import React from 'react'

function AButton(props) {
  return (
        <a href={props.link} className={props.className}>{props.name}</a>
  )
}

export default AButton
