import mongoose from "mongoose";

const table= new mongoose.Schema({
    table_id:{
        type:Number,
        require:true

    },
    num_persons:{
        type:Number,
        required:true
    },
    staus:{
        type:String,
        default:"not reserved"
    }
})

const tabledata=mongoose.model('tabledata',table)

export default tabledata