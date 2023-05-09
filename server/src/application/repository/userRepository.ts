import { authType } from "../../framework/database/mongodb/repository/userRpositoryMongo"
import { BookingDataInerface } from "../../types/BookingInterFace"
import { userInterface } from "../../types/authIterface"

export const userRepository  =  (repository: ReturnType<authType>)=> {

   const doSignup =  (userData:userInterface)=>{return repository.doSignup(userData)}
   const findEmail = ( email:string)=>{return repository.findEmail(email)}
   const googleLogin = (email: string)=> {return repository.googleLogin(email)}
  const bookingDetails = (bookingData:BookingDataInerface)=>{return repository.bookingDetails(bookingData)}
  const getAllBookings = (userId: string) => {return repository.getAllBookings(userId)} 

  return {
    doSignup,
    findEmail,
    googleLogin,
    bookingDetails,
    getAllBookings,

  }
}

export default userRepository;

export type usertypeofRepository = typeof userRepository;