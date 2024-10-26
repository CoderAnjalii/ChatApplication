import express from "express"
import dotenv from 'dotenv'
import dbConnect from "./DB/dbConnect.js";
import authRouter from  './rout/authUser.js'
import messageRouter from './rout/messageRout.js'
import userRouter from './rout/userRout.js'

import cookieParser from "cookie-parser";
import path from "path";

import {app , server} from './Socket/socket.js'
import { userLogin, userLogOut } from "./routControlers/userroutControler.js";

const __dirname = path.resolve();



dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRouter)
app.use('/api/message',messageRouter)
app.use('/api/user',userRouter)
app.use('/api/logout',userLogOut)
app.use('/api/login',userLogin)

app.get('/api/auth',(req,res)=>{
    res.send("API is working")

})

app.get('/api/message',(req,res)=>{
    res.send("Message is working")

})
app.get('/api/logout',(req,res)=>{
    res.send("logout is working")

})

app.get('/api/user',(req,res)=>{
    res.send("User is working")

})

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

const PORT = process.env.PORT ||  4000
server.listen(PORT,()=>{

    dbConnect();
    console.log(`Working at port ${PORT}`);
})