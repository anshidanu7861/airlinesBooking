import express, { Application } from 'express'
import expressConfig from './framework/webserwer/express'
import Server from './framework/webserwer/server'
import database from './framework/database/mongodb/connection/connection'
import router from './framework/webserwer/routers'

const app: Application = express();

// EXPRESS CONFIG
expressConfig(app)
// CREAT SERVER
Server(app)
// Database Connection
database()
// Routes
router(app) 

export default app;