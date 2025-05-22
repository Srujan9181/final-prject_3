import React from 'react'
import Navbar from '../Navbar'
import styles from '../styles/Dashboard.module.css'
import { useState } from 'react'
import Table from '../pages/table'
function dashboard() {
    const [state,Setstate]=useState('')
  return (
    <div className={styles.main} >
        <div className={styles.navbarTop}>
        <div className={styles.empty}></div>
        <Navbar state={state} Setstate={Setstate}/>
        </div>
                {
        state==='' && 
        <div className={styles.body}>
            dashboard
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
        <div className={styles.body}>
            menu
        </div>
        }


                {
        state==='orders' && 
        <div className={styles.body}>
            orders
        </div>
        }


        
    </div>
  )
}

export default dashboard