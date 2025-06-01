import mongoose, { mongo } from "mongoose";
import table from './table.model.js'
let orders=new mongoose.Schema({
    items:{
        type:Array
    },
    ordered_by:{
        type:Number
    },
    duration:{
        type:Number
    },
    order_type:{
        type:String
    },
    order_status:{
        type:String,
        default:'not serverd'
    },
    table_number:{
        ref:table
    },
    chief:{
        ref:table
    }
})

let order=mongoose.model('order',orders)
export default order