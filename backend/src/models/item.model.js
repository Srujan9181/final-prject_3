import mongoose from "mongoose";
const item=new mongoose.Schema({
    food_name:{
        type:String,
    },
    duration:{
        type:Number,
    },
    food_type:{
        type:String,
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number,
        default:0,
    }
},{timestamps:true})

let itemdetail=mongoose.model('item',item)

export default itemdetail;