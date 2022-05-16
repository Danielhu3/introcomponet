import React from 'react'

const types ={
    email:{
        regex: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
        message: 'Enter a valid email address'
    },

    password:{
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: "Your password must have at least: 8 characters, 1 upper case, 1 lower case, 1 number",

    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function onChange(event){
        if(error){
            validate(event.target.value)
            setError(null)
        }
        setValue(event.target.value)
        

    }

    function validate(value){
            if(type === false){
                return true
            }
            if(value.length === 0){
                setError('cannot be empty')
                return false
            }

            if(types[type] && !types[type].regex.test(value)){
                setError(types[type].message)
                return false
            }
            setError(null)
            return true
    }

  return {value, onChange, error, validate: () => validate(value)}
}

export default useForm