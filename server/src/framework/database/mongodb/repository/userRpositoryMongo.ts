import { userInterface } from "../../../../types/authIterface";
import userModel from "../models/userModel";
import bookingModel from "../models/bookingModel";
import { BookingDataInerface } from "../../../../types/BookingInterFace";
import mongoose from "mongoose";

export  function userDBRepository() {
    const doSignup = async (userData: userInterface )=>{
      const user = await userModel.create( userData )
      return user;
    }
  
    const findEmail = async (email: string) =>{      
      const user : userInterface | null = await userModel.findOne({'email' : email})      
      return user;
    }
  
    const googleLogin = async (email: string) =>{
      const user : userInterface | null = await userModel.findOne({'email' : email})
      return user;
    }

    const bookingDetails = async(bookingData : BookingDataInerface) =>{
      const booking = await bookingModel.create( bookingData )
      return booking;
    }

    const getAllBookings = async(userId: string) => {
    let userOjectId = new mongoose.Types.ObjectId(userId)      
    return await bookingModel.find({user: userOjectId})
       
    }

    return  { doSignup,findEmail, googleLogin, bookingDetails, getAllBookings };
}  

export type authType = typeof userDBRepository;