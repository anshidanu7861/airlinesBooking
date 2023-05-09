import express, { Application } from 'express'
const app: Application = express()

const Server = (app: Application ) =>{
const PORT = 5000
    app.listen(PORT, ()=>{
        console.log('Server PORT:5000 Created');
    })
}
export default Server;