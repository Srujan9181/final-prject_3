import items from '../models/item.model.js'
export const itemsdata=async function(req,res){
    const item=await items.find()
    res.status(201).json(item)
}

export const placeorder=async function(req,res){
    
}