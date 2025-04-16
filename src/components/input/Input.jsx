import React from 'react'

function Input({value, onChange, type = "text", placeholder ,className,id}) {
  return (
    <input 
      type={type} 
      id={id} 
      className={className} 
      value={value}
      onChange={onChange}
      placeholder={placeholder}  
    />
  )
}

export default Input
