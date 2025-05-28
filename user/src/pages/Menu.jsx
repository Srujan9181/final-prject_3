import React, { useEffect, useState } from 'react'
import menu from '../jsondata/menu.json'
import styles from '../styles/menu.module.css'
import { FaPlus,FaRupeeSign } from "react-icons/fa";
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiFullPizza } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { GiFrenchFries } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { useNavigate } from 'react-router';





function Menu() {
    let navigate=useNavigate()
  
  const [ordeitems,Setorderitem]=useState(parseInt(localStorage.getItem('orderitems')) || 0)
  const[items,Setitems]=useState(JSON.parse((localStorage.getItem("items"))) || [])
  
  localStorage.setItem("orderitems",ordeitems)
  localStorage.setItem("items",JSON.stringify(items))
  console.log("items",items)
  
  
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
      <div className={styles.filters}>
        <LiaHamburgerSolid className={styles.filter} onClick={()=>menu.filter(item=>item.food_type='burger')}/>
        <GiFullPizza className={styles.filter}/>
        <RiDrinks2Line className={styles.filter} />
        <GiFrenchFries className={styles.filter} />
        <GiFruitBowl  className={styles.filter}/>
      </div>
      <div className={styles.menu}>
        
      {menu.map( function(item,index){
          return <div key={index} className={styles.items}>
                <img className={styles.image} src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                <div className={styles.itemdesc}>
                      <div>
                        <p>{item.food_name}</p>
                        <p style={{fontSize:"large"}}><FaRupeeSign />{item.price}</p>
                      </div>
                      <FaPlus style={{position:"relative", top:"45%"}} onClick={()=>{Setorderitem(ordeitems+1);
                        Setitems([...items,item])
                         } }/>
                        
                </div>
                
                </div>
      }

      )}
      </div>
      
        {ordeitems!=0 && <div className={styles.numberoforders}> 
          {ordeitems + (ordeitems>1?' items added':'item added')}
          <button onClick={()=>navigate('cart')}>Next</button>
          </div>}
      
    </>
  )
}

export default Menu