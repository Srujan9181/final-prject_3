import React from 'react'
import Navbar from '../Navbar'
import styles from '../styles/Dashboard.module.css'
import { useState,useEffect } from 'react'
import Table from '../pages/table'
import Order from '../pages/orderr'
import { Link} from 'react-router'
import Main from '../pages/main'
function dashboard() {
    const [state,Setstate]=useState(localStorage.getItem('state') || '')
    
    

  return (
    <div className={styles.main} >
        <div className={styles.navbarTop}>
        <div className={styles.empty}></div>
        <Navbar state={state} Setstate={Setstate}/>
        </div>
                {
        state=='' && 
        <div className={styles.body}>
            <Main />
        </div>
        }

        {
        state==='table' && 
        <div className={styles.body}>
            <Table /> 
        </div>
        }

                {
        state==='menu' && 
        <a href='http://localhost:5173'/>
        }


                {
        state==='orders' && 
        <div className={styles.body}>
            <Order />
        </div>
        }


        
    </div>
  )
}

export default dashboard