import React from 'react'
import styles from './Input.module.css'

const Input = ({placeholder, name, value, onChange, error, validate}) => {

  return (
    <>
    <input type='text' placeholder={placeholder} name={name} id={name}
    onChange={onChange} value={value} className={styles.input} onBlur={validate}>
    </input>
    {error && <p>{error}</p>}
    </>

  )
}

export default Input