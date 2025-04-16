import React from 'react'
import '../../styles/Table.css'

function Table(props) {
  return (
    <table>
        {props.children}
    </table>
  )
}

export default Table
