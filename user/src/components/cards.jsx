import React from 'react'
import styles from '../styles/menu.module.css'
import { FaPlus,FaRupeeSign } from "react-icons/fa";
import { TiPlus,TiMinus } from "react-icons/ti";
import { useState } from 'react';
function cards({item,orderitems,Setorderitem,idqunat,setIdqunat}) {
    function insertitem(){
      let checkitem=idqunat.find(element=>element._id==item._id)
      Setorderitem(orderitems+1)
      localStorage.setItem('orderitems',orderitems+1)
      if (checkitem){
        const updateditems=idqunat.map((element)=>
            element._id==item._id?{...element,quantity:element.quantity+1}:element

        )
        setIdqunat(updateditems)
        localStorage.setItem('idquant',JSON.stringify(updateditems))
      }
      else{
        const newItem = { ...item, quantity: 1 };
       setIdqunat([...idqunat,newItem])
       localStorage.setItem('idquant',JSON.stringify([...idqunat,newItem]))    
      }
    }

  function deleteitem(){
    let checkitem=idqunat.find(element=>element._id==item._id)
    Setorderitem(orderitems-1)
    localStorage.setItem('orderitems',orderitems-1)

    if (checkitem){
        const updateditems=idqunat.map((element)=>
            element._id==item._id?{...element,quantity:element.quantity-1}:element

        )
        setIdqunat(updateditems)
        localStorage.setItem('idquant',JSON.stringify(updateditems))
      }
      else{
          
      }
  }
   
    console.log(idqunat)
     let checkitem=idqunat.find(element=>element._id==item._id) || []
    // localStorage.setItem('orders',JSON.stringify(idqunat))
    
  return (
        <div  className={styles.items}>
                <img className={styles.image} src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                <div className={styles.itemdesc}>
                      <div>
                        <p>{item.food_name}</p>
                        <p style={{fontSize:"large"}}><FaRupeeSign />{item.price}</p>
                      </div>
                   
                   {/* {idqunat.forEach(element => 
                    element._id==item._id?<FaPlus style={{position:"relative", top:"45%"}} onClick={insertitem}/>:<p>hello</p>
                   )} */}
                   
                   { checkitem.quantity>=1 && 
                    <span className={styles.plusminus}>
                      <TiMinus onClick={deleteitem} className={styles.minus}/> {checkitem.quantity}
                    </span>
                   }
                   
                   <TiPlus className={styles.plus} style={{position:"relative", top:"45%"}} onClick={insertitem}/>
                   
                   
                        
                </div>
                
        </div>
  )
}

export default cards