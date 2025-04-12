import React from 'react'

function Form(props) {
  return (
    <div className='form-card'>
      <form>
          {props.children}
      </form>
    </div>
  )
}

export default Form
