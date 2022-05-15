import React from 'react'
import styles from './Input.module.css'

const Input = ({placeholder, name}) => {
  const [value,setValue] = React.useState('')
  return (
    <input type='text' placeholder={placeholder} name={name} id={name}
    onChange={(e)=> setValue(e.target.value)} value={value} className={styles.input}></input>
  )
}

export default Input