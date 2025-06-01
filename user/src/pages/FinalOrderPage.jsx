import React from 'react'
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineTableRestaurant } from "react-icons/md";
import styles from '../styles/finalorderpage.module.css'
import { useState,useEffect } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { TiPlus,TiMinus } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { PiCurrencyInrThin } from "react-icons/pi";
import SwipeButton from '../components/SwipeButton';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function FinalOrderPage() {
  let navigate=useNavigate()
    
     const [idqunat,setIdqunat]=useState(JSON.parse(localStorage.getItem('idquant'))||[])
     console.log(idqunat)
    const[click,Setclick]=useState('notclicked')
    const[instructions,setInstrrutions]=useState('')
    const[showinstruction,setShowinstruction]=useState(false)
    const[type,setType]=useState("Dinein")
    const[duration,SetDuration]=useState(0)
    const[addetails,setAdddetails]=useState('enabled')
    
    const[username,setUsername]=useState('')
    const[mobile,setMobile]=useState('')
    const[address,setAddress]=useState('')
    const[table,setTable]=useState(1)
    const[disableform,setdisableform]=useState('disable')
  
    

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


  const updateLocalStorage = (updatedItems) => {
    setIdqunat(updatedItems);
    localStorage.setItem('idquant', JSON.stringify(updatedItems));
    const totalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('orderitems', totalItems);
  };

  const incrementItem = (index) => {
    const updatedItems = [...idqunat];
    updatedItems[index].quantity += 1;
    updateLocalStorage(updatedItems);
  };

  const decrementItem = (index) => {
    const updatedItems = [...idqunat];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      updateLocalStorage(updatedItems);
    } else {
      // If quantity is 1 and minus is clicked, remove item
      const filtered = updatedItems.filter((_, i) => i !== index);
      updateLocalStorage(filtered);
    }
  };  

   const removeItem = (index) => {
    const currentItem = idqunat[index].quantity;
    const updatedItems = idqunat.filter((_, i) => i !== index);
    setIdqunat(updatedItems);
    localStorage.setItem("idquant", JSON.stringify(updatedItems));
    const newOrderTotal = parseInt(localStorage.getItem('orderitems') || '0') - currentItem;
    localStorage.setItem("orderitems", newOrderTotal);
  };


  const[price,setPrice]=useState(0)
  

let totalprice = () => {
  const total = idqunat.reduce((acc, item) => acc + item.quantity * item.price, 0);
  setPrice(total);
};

let totalduration = () => {
  const total = idqunat.reduce((acc, item) => acc + item.quantity * item.duration, 0);
  SetDuration(total);
};



  useEffect(()=>{
    totalprice()
    totalduration()
  },[idqunat])



  return (
    <div className={styles.main}>
      <div className={styles.master}>
        <h2 >{wish}</h2>
         <span>place you order here</span>
         <input type="search" name="" id="" className={styles.search}/> 
        
        <div className={styles.items}>
        {idqunat.map(function(item,index){
            return <div key={index} className={styles.cartitems}>
                <img className={styles.image} src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" alt="" />
                <p className={styles.itemdetails}>
                    <span style={{display:"flex",justifyContent:"space-between"}}>
                    {item.food_name}
                    
                    <button onClick={()=>removeItem(index)}   style={{color:"white",borderRadius:"50%",width:"25px",height:"25px",border:"none",background:"none",backgroundColor:"red"}}>X</button> <br />
                    </span>  <br />

                    <span style={{display:"flex",justifyContent:"space-between"}}>
                    <span><FaRupeeSign />{item.price*item.quantity} </span>

                    {
                    item.quantity && <span>
                      <TiMinus onClick={()=>decrementItem(index)} /> {item.quantity} <TiPlus  onClick={()=>incrementItem(index)}/>
                    </span>
                  }
                  </span>
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


              <div style={{width:"90%",
              height:"40vh",
              boxSizing:"border-box",
              backgroundColor:"rgb(240, 245, 243)",
              padding:'2%',
              borderRadius:'10px'
              }}>
              <input type="text" className={styles.inputinstructions} onChange={(e)=>setInstrrutions(e.target.value)} placeholder='Add Cooking Instructions'/>
              <p style={{fontSize:"small"}}>The restaurant will try its best to follow your request. However, refunds or cancellations in this regard won’t be possible</p>
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

        
      <div className={styles.selectingopt}> 
          <button className={styles.Dinein} onClick={()=>setType('Dinein')}>Dinein</button>
          <button className={styles.Takeaway} onClick={()=>setType('Takeaway')}>Takeaway</button>
      </div>
      {type=='Dinein' && 
      <div className={styles.pricedetails}>
          <span className={styles.pricing}>
            <p>item Total</p>
            <p><PiCurrencyInrThin />{price}</p>
          </span>
            <span className={styles.pricing}>
              <p >Taxes</p>
              <p><PiCurrencyInrThin />{price*0.5}</p>
            </span>
            <span className={styles.pricing}>
              <b>Grand Total</b>
              <b><FaRupeeSign /> {price+price*0.5}</b>
            </span>
      </div>
     
      }


      {type=='Takeaway' && 
      <div className={styles.pricedetails}>
          <span className={styles.pricing}>
            <p>item Total</p>
            <p><PiCurrencyInrThin />{price}</p>
          </span>
            <span className={styles.pricing}>
              <p >Taxes</p>
              <p><PiCurrencyInrThin />{price*0.5}</p>
            </span>
             <span className={styles.pricing}>
              <p >Delivery Fee</p>
              <p><PiCurrencyInrThin />{price*0.2}</p>
            </span>
            <span className={styles.pricing}>
              <b>Grand Total</b>
              <b><FaRupeeSign /> {price+price*0.5+price*0.2}</b>
            </span>
      </div>
     
      }



       {
        type=='Dinein' &&  addetails=='enabled' &&
        <button onClick={()=>{setAdddetails('disabled');  setdisableform('enable')}} >Add Details</button>
      }
      {
        addetails=='disabled' && type=='Dinein' && disableform=='enable' &&
        <div className={styles.userdetails}>
          <input type="text" placeholder='name' onChange={(e)=>setUsername(e.target.value)} required/>
          <input type="number" placeholder='mobile number' onChange={(e)=>setMobile(e.target.value)} required/>
          <input type="text" placeholder='address' onChange={(e)=>setAddress(e.target.value)} required/>
          
          <button onClick={()=>{username.length & mobile.length & address.length?setdisableform('disable'):setdisableform('disable')}}>Submit</button>
        </div>
      }
      { username && mobile &&  disableform=='disable' && type=='Dinein' &&
        <div className={styles.details}>
          <p>Your Details</p>
         <span>
          {username},{mobile}
          </span> 
        </div>
        
      }

      { username && mobile &&  disableform=='disable' &&  type=='Dinein' &&
        <div className={styles.orderDiv}>
          <div>

          <MdOutlineTableRestaurant />   Table no.{table} 
          </div>
          <div>

         <FaRegClock />   Delivery in {duration} min
          </div>
        </div>
        
      }



             {
        type=='Takeaway' &&  addetails=='enabled' &&
        <button onClick={()=>{setAdddetails('disabled');  setdisableform('enable')}} >Add Details</button>
      }
      {
        addetails=='disabled' && type=='Takeaway' && disableform=='enable' &&
        <div className={styles.userdetails}>
          <input type="text" placeholder='name' onChange={(e)=>setUsername(e.target.value)}  required/>
          <input type="number" placeholder='mobile number' onChange={(e)=>setMobile(e.target.value)} required/>
          <input type="text" placeholder='address' onChange={(e)=>setAddress(e.target.value)} required/>
          
          <button onClick={()=>{username.length & mobile.length & address.length?setdisableform('disable'):alert('enter details')}}>Submit</button>
        </div>
      }
      { username && mobile &&  disableform=='disable' && type=='Takeaway' &&
        <div className={styles.details}>
          <p>Your Details</p>
         <span>
          {username},{mobile}
          </span> 
        </div>
        
      }

      { username && mobile &&  disableform=='disable' &&  type=='Takeaway' && 
        <div className={styles.orderDiv}>
          <div>

          <p><GrLocation />Delivery at Home - {address}</p>
          </div>
          <div>

         <FaRegClock />   Delivery in {duration} mins
          </div>
        </div>
        
      }

      {idqunat.length && 

         <SwipeButton onSuccess={()=>{
        toast.success("order placed sucessfully")
        localStorage.clear()
        navigate("/")  }}/>
      }

   


    
      

      </div>
    </div>
  )
}

export default FinalOrderPage

