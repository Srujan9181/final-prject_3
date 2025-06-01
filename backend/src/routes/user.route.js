import express from 'express';
import {itemsdata, placeorder} from '../controllers/user.controller.js'
const userRouter=express.Router()
userRouter.get('/',itemsdata)

userRouter.post('/order',placeorder)

export default userRouter