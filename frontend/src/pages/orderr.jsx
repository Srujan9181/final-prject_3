import React from 'react'
import ordertable from '../jsonData/orders.json';
import { GiSandsOfTime } from "react-icons/gi";
// import styles from '../styles/orderr.module.css'
import { ImSpoonKnife } from "react-icons/im";
import styles from '../styles/orderr.module.css'
function orderr() {
  return (
    <div className={styles.main}>
        {ordertable.map(function(item,index){
            return <div className={item.order_type=='takeaway'? styles.takeaway:item.process=='Processing'?styles.master:styles.orderdone}>
                        <div className={styles.cardtop}>
                            <div>
                                    <p><ImSpoonKnife style={{color:'blue'}} />  #108</p>
                                {item.order_type=='dine-in' && <p>Table-{item.table_number[item.table_number.length-1]}</p>}
                                    <p>9.37 am</p>
                                    <p>{item.items.length} item</p>
                            </div>
                           {item.order_type=='dine-in' && <div  className={styles.cradTopDiv}  > <p style={{fontSize:"small"}}>Dine in</p>  <p style={{fontSize:"small"}}>Ongoing:{item.duration}</p></div> } 
                           {item.order_type=='takeaway' && <div  className={styles.cradTopDivTakeaway}  > <p style={{fontSize:"small"}}>TakeAway</p>  {item.pickedup==false && <p style={{fontSize:"small"}}>Not Picked Up</p>}</div> }
                        </div>
                        <div className={styles.cardmiddle}>
                                    {item.items.map( function(list,index){
                                        return <p>{list.quantity} X {list.name}</p>
                                    })}
                        </div>
                        {item.order_type=='takeaway' && <div className={styles.cardbottomtakeaway}><GiSandsOfTime/>{item.process}</div>}
                        
                    </div>
        })}
    </div>
  )
}

export default orderr