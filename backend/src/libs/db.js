import mongoose from 'mongoose'

const connection= function(){
    try {
         mongoose.connect(process.env.DATABASE)
        console.log("database connected")

        
    } catch (error) {
        console.log("database err"+error)
        
    }
}
export default connection