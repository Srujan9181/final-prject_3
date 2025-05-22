import styles from '../styles/table.module.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaChairSolid } from "react-icons/lia";
import {  useState,useEffect } from 'react';




export default function table(){

   const[tabledata,Settabledata]=useState([])
    const[newtable,Setnewtable]=useState('')
  
    const[numpersons,setnumpersons]=useState(1)
    const fetchtabledata=async function(){
                    let tabledata=await axios.get('http://localhost:5555/admin/table')
                    Settabledata(tabledata.data)
                    
                    
                    return
                    }
    useEffect(function(){
        fetchtabledata()
        
        
    },[])

    async function deleteasingtable(param){
        
    }
    
    
    async function addnewtable(){
            
            var newtabledata=await axios.post('http://localhost:5555/admin/addnewtable',{
                table_id:tabledata.length+1,
                num_persons:numpersons
            })
            toast('huray new table is created') 
    }
   
    return(
        <>
        <div className={styles.main}>
            <div className={styles.search}>
                <input type="search" />
                
            </div>
            <div className={styles.table} >
                <h1 style={{width:"100%"}}>Tables</h1> 
                
                {tabledata.map(function(item,index){

                    return  <div key={index} className={styles.fulltable}>
                                <div  className={styles.tableCard}>
                                    <RiDeleteBin6Line className={styles.deleteicon}   
                                                    onClick={async function(){
                                                        const toastId = toast.loading("Deleting table...");
                                                        await axios.delete("http://localhost:5555/admin/delatetable",{
                                                        data:{_id:item._id,
                                                            table_id:item.table_id
                                                        }
                                                        
                                                         })
                                                         toast.update(toastId,{
                                                            render:"Table deleted sucessfully",
                                                            type:"success",
                                                            isLoading:false,
                                                            autoClose:3000,
                                                         })

                                                        
                                                        }} />
                                    <h3>Table</h3>
                                    <h2>{item.table_id}</h2> 
                                    <span className={styles.seats}><LiaChairSolid />{item.num_persons}</span> 
                                </div>
                               
                                
                            </div>

                })}
               
                <div  onClick={()=>Setnewtable('add')} className={styles.tableCard} style={{textAlign:"center",
                                                fontSize:"xx-large",
                                                backgroundColor:"white",
                                                border:"2px dashed gray"}}>
                    +
                    {newtable && 
                        <div className={styles.addtablecard}>
                                <p>Table name (optional)</p>
                                <h1 style={{borderBottom:"2px dashed"}}>{tabledata.length+1}</h1>  <br />
                                <p style={{textAlign:"left"}}>Chair</p>
                                <select onChange={(e)=>setnumpersons(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select> <br /> <br /> 

                                <button onClick={addnewtable} style={{borderRadius:"10px",padding:"10px",color:"white",backgroundColor:"rgb(79, 79, 79)"}}>Create</button>

                        </div>
                    }
                </div>

                
                
            </div>
        </div>
        </>
    )
}