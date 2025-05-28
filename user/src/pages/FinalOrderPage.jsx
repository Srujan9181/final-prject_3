import React from 'react'
import styles from '../styles/finalorderpage.module.css'
import { useState,useEffect } from 'react'
import { FaPlus,FaRupeeSign } from "react-icons/fa";
function FinalOrderPage() {
    console.log(localStorage.getItem('items'))
    const[items,setItems]=useState(JSON.parse(localStorage.getItem('items')) || [])

    const [wish,Setwish]=useState("Good Night")
              const getGreeting= function () {
                    const now = new Date();
                    const hour = now.getHours(); 
                    if (hour >= 12 && hour < 16) {
                      Setwish( "Good Afternoon ");
                    } else if (hour >= 16 && hour < 23) {
                      Setwish("Good Evening");
                    } else if (hour >= 0 && hour < 12) {
                      Setwish("Good Morning");
                    }
                }
            useEffect(function(){
              getGreeting()
              
            },[])


  return (
    <>
        <h2>{wish}</h2>
         <h4>place you order here</h4>
         <input type="search" name="" id="" className={styles.search}/> 
        
        {items.map(function(item,index){
            return <div key={index} className={styles.cartitems}>
                <img className={styles.image} src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                <p className={styles.itemdetails}>
                    {item.food_name}
                    <button>*</button> <br />
                    <FaRupeeSign />{item.price}
                </p>
            </div>
        })}
    </>
  )
}

export default FinalOrderPage