import express, { Application } from 'express'
import expressConfig from './framework/webserwer/express'
import Server from './framework/webserwer/server'
import database from './framework/database/mongodb/connection/connection'
import router from './framework/webserwer/routers'
import errorHandlingMidlleware from './framework/webserwer/middleware/errorHandlingMiddleware'

const app: Application = express();

// EXPRESS CONFIG
expressConfig(app)
// CREAT SERVER
Server(app)
// Database Connection
database()
// Routes
router(app) 
// Error Handling Middleware
app.use(errorHandlingMidlleware)

export default app;