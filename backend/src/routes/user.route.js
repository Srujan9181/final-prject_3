import express from 'express';
import items from '../models/item.model.js'
const userRouter=express.Router()
userRouter.get('/',async function(req,res){
    const item=await items.find()
    res.status(201).json(item)
})
export default userRouter