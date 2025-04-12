import React from 'react'

function Label(props) {
  return (
    <label htmlFor={props.htmlFor}>{props.name}</label>
  )
}

export default Label
