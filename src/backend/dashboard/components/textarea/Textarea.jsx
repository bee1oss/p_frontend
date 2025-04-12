import React from 'react'

function Textarea(props) {
  return (
    <textarea id={props.id} className={props.className} rows={props.rows} required></textarea>
  )
}

export default Textarea
