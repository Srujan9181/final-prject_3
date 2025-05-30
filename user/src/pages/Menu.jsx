import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/menu.module.css'
import { FaPlus,FaRupeeSign } from "react-icons/fa";
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiFullPizza } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { GiFrenchFries } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { useNavigate } from 'react-router';
import Cards from '../components/cards';
function Menu() {
  const[menu,setMenu]=useState([])
  async function getmenu(){
    let item=await axios.get('http://localhost:5555/user')
    setMenu(item.data)      
  }
    let navigate=useNavigate()
    useEffect(function(){
      getmenu()
    },[])
  

  const [orderitems,Setorderitem]=useState(parseInt(localStorage.getItem('orderitems')) || 0)
  // const[items,Setitems]=useState(JSON.parse((localStorage.getItem("items"))) || {})
  
  
  localStorage.setItem("orderitems",orderitems)
  // localStorage.setItem("items",JSON.stringify(items))
  //console.log("items",items)

  // const uniqueData = Array.from(
  // new Map(items.map(item => [JSON.stringify(item), item])).values());
  // localStorage.setItem("uniqueData",JSON.stringify(uniqueData))
  // // console.log("uniqueData",uniqueData)
  

  
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
          return  <Cards key={index} item={item} orderitems={orderitems} Setorderitem={Setorderitem}/> 
                  
      }

      )}
      </div>
      
        {orderitems!=0 && <div className={styles.numberoforders}> 
          {orderitems + (orderitems>1?' items added':'item added')}
          <button onClick={()=>navigate('cart')}>Next</button>
          </div>}
      
    </>
  )
}

export default Menu