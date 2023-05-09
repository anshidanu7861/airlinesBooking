import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'

const corsOption = {
    origin:"http://localhost:5173",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    credentials:true
}

const expressConfig = (app: Application)=>{
// CORS
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.static("public"))
app.use(cors(corsOption))
}

export default expressConfig;


