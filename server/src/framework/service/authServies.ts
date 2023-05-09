import bcrypt, { genSalt } from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenvConfig from '../../configDotenv'


export const authService = ()=> {
    const encrypt = async (password: string) => {
        const genSalt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, genSalt)
        return password;
    }

    const ComparePassword = async (password: string, encriptPassword: string)=> {
        const status = await bcrypt.compare(password, encriptPassword)
        return status;
    }

    const verifyAccessToken = async (token: string) =>{
        const response = await jwt.verify(token, dotenvConfig.refresh_token_key)
        return response
    }

    return {
        encrypt,
        ComparePassword,
        verifyAccessToken
    }
}

export type AuthService = typeof authService;
