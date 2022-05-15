import React from 'react'

const useForm = (type) => {
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

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

  return {value, setValue, error}
}

export default useForm