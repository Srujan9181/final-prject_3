
import tabledata from '../models/table.model.js'

export const fulltable=async function(req,res){
    res.send(await tabledata.find())
}

export const addnewtable=async function(req,res){
    let {table_id,num_persons}=req.body
    try{
        const newtable=await new tabledata({table_id,num_persons})
        await newtable.save()
        res.status(201).json({message:"new table added",newtable:newtable})
    }
    catch(err){}

}
export const delatetable=async function(req,res){
    let {_id,table_id}= req.body
    await tabledata.findByIdAndDelete(_id)


        await tabledata.updateMany(
      { table_id: { $gt: table_id } },
      { $inc: { table_id: -1 } }
    );


    res.status(200).json({message:"table deleted"})
    
}