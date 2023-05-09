import { useState } from 'react'

const loginValidation = () =>{
    const [ errors, setErrors ] = useState({
        email: "",
        password: "",
    })

    const [loginForm, setLoginForm ] = useState({
        email: '',
        password: '',
    })

    const isValidEmail = (string)=>{
        return  /^[a-zA-Z-09+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const passwordLength = (string) => {
        return string.length >=6
    }

    const handleInput = (e) => {
        let error;
        const {name, value} = e.target

        if(!value.trim()) {
            error = `${name} is required`
        }else if(name === 'email') {
            if(!isValidEmail(value)) error = 'Invalid email address'
        }else if(name === 'password') {
            if(!passwordLength(value)) error = "Should contain atleast 6 charectors"
        }

        setErrors((prevErrors)=>({
            ...prevErrors,
            [name]:error
        }))

        setLoginForm((prevData)=>({
            ...prevData,
            [name] : value,
        }))
    }

    const isValidForm = async(e) =>{
        e.preventDefault()
        let status = true
        if(loginForm['email'].length == 0 || errors['email'] != undefined) status = false
        return status
    }

    return { errors, loginForm, handleInput, isValidForm }
}

export default loginValidation