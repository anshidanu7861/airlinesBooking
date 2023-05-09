import React from 'react'
import axiosConfig from '../config/axiosConfig'


const authAPI = ()=>{ 

    const dosignup = async ( signupData ) =>{
        try{
           const response = await axiosConfig.post('/signup', signupData)
           return response.data
        }catch(err){
            throw{msg: err.response.data.message}
        }
    }

    const verifyEmail = async (dataURL) => {
        try{
            const response = await axiosConfig.post('/login', dataURL)
            return response.data
        }catch(err) {
            throw{msg: err.response.data.message}
        }
    }

    const CreateAccessToken = async () => {
        try{
            const response = await axiosConfig.get('/token')
            return response.data;
        }catch(err) {
            throw{msg: err.response.data.message}
        }
    }

    const googleLoginApi = async (email)=>{
        try{
            const response = await axiosConfig.post('/googleLogin', email)
            return response.data
        }catch(err) {
            console.log(err);
        }
    }

    const BookingApi = async (BookingData) =>{
       try{
            const response = await axiosConfig.post('/bookingData',BookingData)
            return response.data
       }catch(err){
        console.log(err);
       }
    }

    const getBooking = async(userId)=> {
        try{
            const response = await axiosConfig.get(`/getBookingDatas/${userId}`)
              return  response.data
        }catch(err) {
            console.log(err);
        }
    }

    return { dosignup,
             verifyEmail,
             CreateAccessToken, 
             googleLoginApi, 
             BookingApi,
             getBooking
            }
}

export default authAPI;