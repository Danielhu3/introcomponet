import React from 'react'

const types ={
    email:{
        regex: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
        message: 'Preencha um email válido'
    },

    password:{
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: "Sua senha deverá conter pelo menos: 8 dígitos, 1 letra maiúscula, 1 letra minúscula",

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
                setError('Preencha um valor')
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