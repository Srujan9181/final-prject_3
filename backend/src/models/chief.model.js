import mongoose from "mongoose";
const newchief=new mongoose.Schema({
    name:{
        type:String
    },
    number_of_orders:{
        type:Number,
        default:0
    },
    time:{
        type:Number,
        default:0
    }

},{timestamps:true})