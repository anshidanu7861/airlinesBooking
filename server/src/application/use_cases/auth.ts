import { HttpStatus } from "../../types/httpStatus";
import AppError from "../../utils/appError";
import { authServiceInterfaceType } from "../services/authServiceInteface";
import { userInterface } from "../../types/authIterface";
import { authType } from "../../framework/database/mongodb/repository/userRpositoryMongo";
import { BookingDataInerface } from "../../types/BookingInterFace";
import { ObjectId } from "mongoose";

export const addUser = async(
    userData: userInterface,
    userDbRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>,
    )=>{
        userData.email = userData.email?.toLowerCase()
        userData.password  = await authServices.encriptPassword(userData.password)
        userData.confirmPassword = await authServices.encriptPassword(userData.confirmPassword);
        const user = await userDbRepository.doSignup(userData)
        return user
}

export const addBooking = async(
    bookingData: BookingDataInerface,
    userDbRepository: ReturnType<authType>,

) =>{
    const booking = await userDbRepository.bookingDetails(bookingData)
    return booking
}

export const googleLogin = async(
    email:string,
    userDBRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
) =>{
    email = email.toLowerCase()
    const user: userInterface | null = await userDBRepository.googleLogin(email)
    if(!user) {
        throw new AppError ("this user does't exist", HttpStatus.UNAUTHORIZED)
    }else{
        const token = await authServices.generateAccessToken(user._id as string)
        const refreshToken = await authServices.generateRefreshToken(user._id as string)
        console.log(refreshToken, "find token");
        
        return {user, token, refreshToken }
    }
}

export const isValidEmail = async(
    email: string , 
    password: string,
    userDBRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
) =>{
    email = email.toLocaleUpperCase()
    const user : userInterface | null = await userDBRepository.findEmail(email)
    if(!user) {
        throw new AppError ("this user does't exist", HttpStatus.UNAUTHORIZED)
    }else{
        const response = await authServices.comparePassword ( password, user.password)
        if(!response) {
            throw new AppError("Sorry, incorrect password", HttpStatus.UNAUTHORIZED)
        }
        const token = await authServices.generateAccessToken(user._id as string)
        const refreshToken = await authServices.generateRefreshToken(user._id as string)
        return { user, token, refreshToken }
    }
}

export const getAllBookings = async(
    user: string,
    userDBRepository:ReturnType<authType>
)=>{
    return await userDBRepository.getAllBookings(user)
}




