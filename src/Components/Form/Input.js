import React from 'react'
import styles from './Input.module.css'

const Input = ({placeholder, name, type, value, onChange, error, validate}) => {

  return (
    <>
    <input type={type} placeholder={placeholder} name={name} id={name}
    onChange={onChange} value={value} className={styles.input} onBlur={validate}>
    </input>
    {error && <p className={styles.error}>{error}</p>}
    </>

  )
}

export default Input