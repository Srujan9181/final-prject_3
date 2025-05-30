import React from 'react'
import styles from '../styles/finalorderpage.module.css'
import { useState,useEffect } from 'react'
import { FaPlus,FaRupeeSign } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
function FinalOrderPage() {
  
    
    const[uniqueitems,setuniqueitems]=useState(JSON.parse(localStorage.getItem('uniqueData')) || [])
    const[click,Setclick]=useState('notclicked')
    const[instructions,setInstrrutions]=useState('')
    const[showinstruction,setShowinstruction]=useState(false)
    console.log("uniqe",uniqueitems)
   

    
    

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
        
        <div className={styles.items}>
        {uniqueitems.map(function(item,index){
            return <div key={index} className={styles.cartitems}>
                <img className={styles.image} src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                <p className={styles.itemdetails}>
                    <span style={{display:"flex",justifyContent:"space-between"}}>
                    {item.food_name}
                    <button onClick={function () {
                                      const updatedItems = uniqueitems.filter((_, i) => i !== index);
                                      setuniqueitems(updatedItems);
                                      localStorage.setItem("uniqueitems", JSON.stringify(updatedItems));
                                      localStorage.setItem("orderitems",uniqueitems.length)
                    } }>X</button> <br />
                    </span>
                    <FaRupeeSign />{item.overalprice}
                </p>
            </div>
        })}
        </div>
        
        {showinstruction!=true && 
         <p className={styles.cook} onClick={()=>Setclick('clicked')}>Add cooking instructions(optional)</p>
        }
      

        {
          click=='clicked' && 
          <div className={styles.cookinginstructions}>
              <IoCloseCircle  className={styles.IoCloseCircle} onClick={()=>Setclick('notclicked')}/>


              <div style={{width:"80%",
              boxSizing:"border-box"
              }}>
              <input type="text" className={styles.inputinstructions} onChange={(e)=>setInstrrutions(e.target.value)} placeholder='Add Cooking Instructions'/>
              <p style={{fontSize:"xx-small"}}>The restaurant will try its best to follow your request. However, refunds or cancellations in this regard won’t be possible</p>
              </div>
              
              <div className={styles.buttonsDiv}>
                <button className={styles.cancelButton} onClick={()=>Setclick('notclicked')}>Cancel</button>
                <button className={styles.nextButton}  onClick={()=>{Setclick('notclicked'); setShowinstruction(true) }}>Next</button>
              </div>
          </div>

        }

        {showinstruction && instructions.length>1 && 
        <p class={styles.outputBox}>{instructions}</p>
        }



    </>
  )
}

export default FinalOrderPage