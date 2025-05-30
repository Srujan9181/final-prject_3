import React from 'react'
import styles from '../styles/menu.module.css'
import { FaPlus,FaRupeeSign } from "react-icons/fa";
import { useState } from 'react';
function cards({item,orderitems,Setorderitem}) {
    const [idqunat,setIdqunat]=useState([])
    console.log(idqunat)
  return (
        <div  className={styles.items}>
                <img className={styles.image} src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                <div className={styles.itemdesc}>
                      <div>
                        <p>{item.food_name}</p>
                        <p style={{fontSize:"large"}}><FaRupeeSign />{item.price}</p>
                      </div>
                   
                   <FaPlus style={{position:"relative", top:"45%"}} onClick={()=>{
                        Setorderitem(orderitems+1)
                        
                      } }/>
                   
                        
                </div>
                
        </div>
  )
}

export default cards