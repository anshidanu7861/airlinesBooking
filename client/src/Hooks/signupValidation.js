import { useState } from 'react'

const userSignupValidation = ()=> {

    const [errors, setError] = useState({
        fname:"",
        lname:'',
        email:"",
        phone:"",
        password:"",
        confirmPassword: "",
    }) 

    const [signForm, setSignForm] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword: "",
    })

    const containsNumber = (string)=>{
        return /\d/.test(string)
    }

    const length = (stirng)=>{
        return stirng.length >=3
    }

    const specialCharectors = (string) =>{
        return !/^[a-zA-Z\s]+$/.test(string)
    }

    const isValidEmail = (string)=>{
        return /^[a-zA-Z-09+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const isValidMobile = (string) =>{
        return /^[6-9]\d{9}$/.test(string)
    }

    const passwordLength = (string)=> {
        return string.length >= 6
    }

    const handleInputs = (e)=> {
        let error;
        const {name, value} = e.target 
        if(!value.trim()) {
            error = `${name} is required`
        }else if(name === 'fname'){
            if(containsNumber(value)) error = "Should only contains alphabets"
            if(!length(value)) error = "Should contain atleast 3 alphabets";
        }else if(name === 'email') {
            if(!isValidEmail(value)) error = 'Invalid email address'
        }else if(name === 'phone') {
            if(!isValidMobile(value))error = 'Invalid mobile number'
        
            
        }else if(name === 'password') {
            ClipboardEvent
            if(!passwordLength(value)) error = "Should contain atleast 6 charecter"
            
        }else if(name === 'lname') {
            if(specialCharectors(value)) error = "Should only contain alphabets"
        }else if(name === 'confirmPassword') {
            if(signForm.password !== value) error = "Password does not match"
        }

        setError((prevErrors)=>({
            ...prevErrors,
            [name]: error,
        }))

        setSignForm((preData)=>({
            ...preData,
            [name]: value,
        }))

   
    }
    const isValidForm = async(e)=>{
        e.preventDefault()
        let status = true
        if(signForm['email'].length == 0 || errors['email'] != undefined) status = false
        if(signForm.password != signForm.confirmPassword) status = false
        return status; 
    }
    return {errors, signForm, setSignForm, handleInputs, isValidForm }
}

export default userSignupValidation;