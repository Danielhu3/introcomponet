import React from 'react'

const Input = ({placeholder, name}) => {
  const [value,setValue] = React.useState('')
  return (
    <input type='text' placeholder={placeholder} name={name} id={name}
    onChange={(e)=> setValue(e.target.value)} value={value}></input>
  )
}

export default Input