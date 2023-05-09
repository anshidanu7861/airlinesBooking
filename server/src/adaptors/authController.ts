import { Request, Response } from "express";
import { userInterface } from "../types/authIterface";
import { usertypeofRepository } from "../application/repository/userRepository";
import { authType } from "../framework/database/mongodb/repository/userRpositoryMongo";
import { addUser, addBooking, getAllBookings } from "../application/use_cases/auth";
import { AuthService } from "../framework/service/authServies";
import { authServiceInterfaceType } from "../application/services/authServiceInteface";
import asyncHandler from 'express-async-handler'
import { isValidEmail, googleLogin } from "../application/use_cases/auth";
import { BookingDataInerface } from "../types/BookingInterFace";


const userAuthController = (      
  userDBRepository: authType,
  userRepository: usertypeofRepository,
  authService: AuthService,
  authServiceInterface: authServiceInterfaceType,

  )=>{
  const userDBrepository = userRepository(userDBRepository()) 
  const authServices = authServiceInterface(authService())

  
  const register = asyncHandler( async (req:Request, res: Response) =>{    
    let userData: userInterface = req.body
    const response = await addUser(userData, userDBrepository, authServices)
    res.json(response)
  })

  const jwtAuth = asyncHandler(async (req: Request, res: Response)=>{
    try{
      let newAccessToken = await authServices.generateAccessToken(
        req.cookies.JWT_REFRESH_TOKEN
      )
      res.status(200).json({ accessToken: newAccessToken });
    }catch(err) {
      res.status(401).json(err)
    }
   
  })

   const emailVerification = asyncHandler(async (req: Request, res:Response)=>{
    let { email, password } : { email: string, password: string } = req.body    
    const response = await isValidEmail(email, password, userDBrepository, authServices)    
    res.cookie('refreshToken', response.refreshToken, {httpOnly: true})
    console.log(response);
    
    res.json(response)
   })

   const googleVerification = asyncHandler(async (req: Request, res: Response)=>{
    let { email } : { email: string } = req.body
    const response = await googleLogin(email, userDBrepository, authServices )
    res.cookie('refreshToken', response.refreshToken, {httpOnly: true })
    res.json(response)
   })

   const bookingData = asyncHandler(async(req:Request, res:Response)=>{
    let BookingData : BookingDataInerface = req.body
    const response = await addBooking(BookingData, userDBrepository)
    res.json(true)
   })

   const getBookingDatas = asyncHandler(async(req:Request, res:Response)=>{
    let userId : string = req.params.userId
    const response = await getAllBookings(userId, userDBrepository)
    res.json(response)
   })

  return {
    register,
    emailVerification,
    jwtAuth,
    googleVerification,
    bookingData,
    getBookingDatas
  }
}


export default userAuthController;



