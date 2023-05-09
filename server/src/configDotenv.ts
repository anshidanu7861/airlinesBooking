import dotenv from 'dotenv'
dotenv.config()

const dotenvConfig = {
    access_token_key: process.env.JWT_ACCESS_TOKEN as string,
    refresh_token_key: process.env.JWT_REFRESH_TOKEN as string,
  
}

export default dotenvConfig;