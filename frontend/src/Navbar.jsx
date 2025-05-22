import React from 'react'
import styles from './styles/Navbar.module.css'
import { IoMdStats } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { BsGrid1X2Fill } from "react-icons/bs";
import { useNavigate } from 'react-router';

function Navbar({state,Setstate}) {
    let navigate=useNavigate()

   
  return (
    <div className={styles.icons}>
        <BsGrid1X2Fill  onClick={()=>Setstate('')}/>
        <RiSofaFill onClick={()=>Setstate('table')}/>
        <FaBook onClick={()=>Setstate('menu')}/>
        <IoMdStats onClick={()=>Setstate('orders')}/>  
    </div>
  )
}

export default Navbar