import express from 'express'
import userAuthController from '../../../../adaptors/authController';
import { authServiceInterface } from '../../../../application/services/authServiceInteface';
import { authService } from '../../../service/authServies';
import {userRepository} from '../../../../application/repository/userRepository'
import { userDBRepository } from '../../../database/mongodb/repository/userRpositoryMongo';


const router = express.Router();
const controller = userAuthController(
    userDBRepository,
    userRepository,
    authService,
    authServiceInterface,
)

// USER REGISTER
router.post('/signup', controller.register )
// VERIFY EMIAL
router.post('/login', controller.emailVerification )
// REFRESH TOKEN
router.get('/token', controller.jwtAuth)
// GOOGLE AUTH
router.post('/googleLogin', controller.googleVerification)
// BOOKING DATA
router.post('/bookingData',controller.bookingData)
// GET ALL BOOKING DATAS
router.get('/getBookingDatas/:userId',controller.getBookingDatas)


export default router;