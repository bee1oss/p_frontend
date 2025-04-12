import React from 'react'
import './Button.css'

function AButton(props) {
  return (
        <a href={props.link} className={props.className}>{props.name}</a>
  )
}

export default AButton
