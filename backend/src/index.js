import express from 'express';
import Database from './libs/db.js'
import dotenv from 'dotenv';
import cors from 'cors'
import adminRoute from './routes/admin.route.js';
import userRouter from './routes/user.route.js';
const server=express()
dotenv.config()
const PORT=process.env.PORT
server.use(cors())
server.use(express.json())
Database()



server.use('/admin',adminRoute)
server.use('/user',userRouter)


server.listen(PORT,function(){
    console.log("http://localhost:"+PORT)
})