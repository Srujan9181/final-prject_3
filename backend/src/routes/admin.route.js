import express from 'express'
import { addnewtable, delatetable, fulltable } from '../controllers/admin.conroller.js'


const adminRoute=express.Router()
adminRoute.get('/table',fulltable)
adminRoute.post('/addnewtable',addnewtable)
adminRoute.delete('/delatetable',delatetable)


export default adminRoute